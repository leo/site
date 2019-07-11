import markdown from 'markdown-in-js'
import asPost from '../../layouts/post'
import { Code, InlineCode } from '../../components/code'
import Link from '../../components/link'
import P from '../../components/paragraph'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import components from '../../components'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'

export default asPost({
  id: 'canary',
  hasCover: true
})(markdown(components)`

  At the moment of writing, our ecosystem spans
  several major applications that are crucial for the
  day-to-day operations of ZEIT.

  The list not only
  includes [Now CLI](https://zeit.co/download#command-line) and [Now Desktop](https://zeit.co/download) (which,
  along with [our site](https://zeit.co), represents the most
  important entry points to
  our platform), but also projects
  like [Hyper](https://hyper.is) and [Next.js](https://github.com/zeit/next.js) - which
  eliminate all of the primary
  pain points you come across when building something online.

  Summa summarum: They're all equally important to us and we
  love working on them and pushing all of them into the direction
  of a even brighter future with the help of our
  community. 🤗

  That's also the reason why we're very excited whenever there's the
  time for a new feature or release: It's just a
  really great feeling to ship! 🤤

  However, as the number of people that are using these
  apps keeps growing exponentially, a decision had to be made
  in order to preserve the stability of the code we actually hand
  out into the world - something
  that would ensure no friction is caused when publishing
  updates.

  As a result, we've decided to
  start publishing [Canary Releases](https://zeit.co/blog/canary).

  In the following sentences, I'll talk about how we actually implemented
  this into three of our
  apps: [Now CLI](https://zeit.co/download#command-line), [Now Desktop](https://zeit.co/download) and [Hyper](https://hyper.is). If
  you haven't read the [article](https://zeit.co/blog/canary) about how to enable it yet, I highly recommend to do so first.

  ## Now CLI

  Just like the stable ones, the canary releases for Now CLI
  are available on three channels: You can either install
  them through [npm](https://www.npmjs.com/package/now), [Now Desktop](https://zeit.co/download), or
  by downloading [the binaries](https://github.com/zeit/now-cli/releases) directly (see how to
  do that [here](https://zeit.co/blog/canary)).

  In all three cases, the source is [GitHub Releases](https://github.com/zeit/now-cli/releases). In between,
  our CDN ensures that the files get compressed (GZIP) and are available at maximum download speed in
  any location in the world. While being streamed to the client, they're
  decompressed and placed in your local binary directory.

  At this point, I'd also like to clear up some confusion about
  how our [npm package](https://www.npmjs.com/package/now) is installed: While
  we do provide a different source for the content of the package (our CDN,
  as mentioned above), we do not interfere with the decisions
  npm is making about where to place the binary.

  This means that, if
  you'd like the binaries to be installed in a different location, just
  configure npm accordingly.

  ### What Changed

  In order to support canary releases, we firstly had to adjust
  the [microservice](https://now-cli-releases.zeit.sh) that
  contains the CDN's download links to the binary files
  for all supported platforms of the latest release.

  Instead of
  responding with the latest stable one by default, it now responds
  with an object containing one property for each channel:

  ${(
    <Code language="javascript" syntax={json}>{`{
  "stable": {...},
  "canary": {...}
}`}</Code>
  )}

  ${(
    <P>
      This brings us right to the next part of what changed: If you have enabled
      canary updates in Now Desktop, it will start using the{' '}
      {<InlineCode>canary</InlineCode>} property (instead of the{' '}
      {<InlineCode>stable</InlineCode>} one) to check for Now CLI updates.
    </P>
  )}

  When installing it using npm, the flow is a little
  different: The requests to [GitHub Releases](https://github.com/zeit/now-cli/releases) will
  go through the CDN, but won't touch the API mentioned above. That's
  because the microservice is only meant to cache the latest stable and
  canary release to prevent Now Desktop or our site (which are both
  requesting the latest release) to hit GitHub's rate limit.

  However, we still had to make adjustments to the way how
  new npm package updates are published: Because there are now [two branches](#general-rules) in
  the [GitHub repository](https://github.com/zeit/now-cli), we
  had to implement two separate config files in order
  for [Travis CI](https://travis-ci.org) to assign the
  right [dist-tag](https://docs.npmjs.com/cli/dist-tag) to each npm release.

  Although you can tell Travis CI to deploy a release if the commit was tagged, it's
  impossible to check for the branch on top of that:

  While you can set both [conditions](https://docs.travis-ci.com/user/deployment#Conditional-Releases-with-on%3A) (which
  is needed in our case, because we only want a release
  to happen if the commit was tagged on a certain branch), the ${(
    <InlineCode>branch</InlineCode>
  )} one will be ignored
  if ${<InlineCode>tags</InlineCode>} is also set:

  ${(
    <Code language="json" syntax={json}>{`"on": {
  "branch": "canary",
  "tags": true
}`}</Code>
  )}

  This is because - in the case of a tagged commit - Travis CI doesn't receive
  any information about the branch at all.

  In turn, we decided to simply create a separate config file for each
  branch:

  On the "master" branch, the package will be tagged
  with ${<InlineCode>latest</InlineCode>} on npm. For "canary", however,
  it will be tagged with  ${(
    <InlineCode>canary</InlineCode>
  )}. To achieve this, we only had to set a property
  on the deployment:

  ${<Code language="javascript" syntax={json}>{`tag: 'canary'`}</Code>}

  You can find both config files here:

  - [master/stable](https://github.com/zeit/now-cli/blob/master/.travis.yml)
  - [canary](https://github.com/zeit/now-cli/blob/canary/.travis.yml)

  Now that all of this configuration is in place, we only need to
  push a tagged commit and create
  a [GitHub Release](https://github.com/zeit/now-cli/releases) using [release](https://github.com/zeit/release) that's
  marked as a "pre-release". After
  that, the CI will handle the rest, upload the binaries and publish a
  new version of the npm package by itself.

  From there on, users will be able to install the canary release from
  npm using the "canary" tag and all Now Desktop instances
  with the enabled "Canary Updates" preference will receive the CLI
  update automatically.

  ## Now Desktop & Hyper

  Because we're using [Hazel](https://github.com/zeit/hazel)${(
    <Ref id="1" />
  )} to deliver updates to both
  apps, implementing the canary channel was a matter of just two major changes:

  ${(
    <P>
      Firstly, we had to deploy two new update servers (since each{' '}
      <Link href="https://github.com/zeit/hazel">Hazel</Link> instance is
      designed to handle only a single update channel). For both apps, this was
      as easy as running two commands.
    </P>
  )}

  The first one being the deployment:

  ${(
    <Code language="bash" syntax={bash}>
      {'now -e NODE_ENV="production" -e PRE="1" zeit/hazel'}
    </Code>
  )}

  The most important part about the above command is the ${(
    <InlineCode>PRE</InlineCode>
  )} environment
  flag. It tells the update server to only pick up pre-releases.

  Then, the second one creating an alias:

  ${(
    <Code language="bash" syntax={bash}>
      {'now alias <deployment-id> <update-server-alias>'}
    </Code>
  )}

  After running these two commands, we were done with
  the server-side part of the implementation. These are the new Hazel instances providing Now Desktop and Hyper
  with canary updates (if [enabled](https://zeit.co/blog/canary) in the config):

  - [now-desktop-releases-canary.zeit.sh](https://now-desktop-releases-canary.zeit.sh)
  - [releases-canary.hyper.is](http://releases-canary.hyper.is)

  They align very nicely with the existing stable channel instances:

  - [now-desktop-releases.zeit.sh](https://now-desktop-releases.zeit.sh)
  - [releases.hyper.is](http://releases.hyper.is)

  After we've ensured that the update servers are in place, the only
  thing left was making Now Desktop ([PR](https://github.com/zeit/now-desktop/pull/383)) and
  Hyper ([original PR](https://github.com/zeit/hyper/pull/2101), [final PR](https://github.com/zeit/hyper/pull/2127)) capable
  of providing the user with canary updates.

  Thanks to [Hazel](https://github.com/zeit/hazel)'s straightforward approach
  to updating Electron apps, this was all we had to do. Now both apps
  have a canary channel!

  ## General Rules

  Along with the adjustments mentioned above, we also ensured that
  the following rules apply to all projects with canary channels:

  - The repository contains a "master" and a "canary" branch.
  - The "master" branch should only contain stable releases and
  should not receive any pull requests (except for hot fixes that need
  to be released to the public immediately).
  - The "canary" branch should be the default branch of the
  repository. This is where all the work happens and where pull requests
  land by default. It will be released much more often than "master".
  - Force-pushing and merging without successful tests or reviews is not
  allowed on the "master" branch.

  ${(
    <P>
      Once all of the repositories of yours that support canary channels comply
      with those rules, there should be no more unforeseen consequences
      generated by publishing code, because it all went through a staging phase.
    </P>
  )}

  ## Afterword

  Thank you for taking the time to read this post!

  If you're also publishing software and considering
  a canary release channel, I highly recommend giving it a try.

  Not only does it protect your users from any friction generated by code
  that's not well enough tested, but it also gives you
  a separate opt-in channel specifically tailored for playing around
  with new features and potentially breaking changes.

  Have a great day! 😋

  <FootNotes>
    <Note id="1">
      If you want to learn more about why Hazel is so
      effective, you can watch our <Link href="https://youtu.be/xL1O94FO6tY?t=4m10s">latest keynote</Link> from
      ZEIT Day Berlin 2017. It also covers why you should
      try out Hyper's canary channel (details about the 2.0 release).
    </Note>
  </FootNotes>
`)
