// Syntax
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'

// Packages
import Tweet from 'react-tweet-embed'

// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Meta from '../../components/meta'
import Link from '../../components/link'
import { H2, H3 } from '../../components/heading'
import { UL, LI } from '../../components/list'
import { Code, InlineCode } from '../../components/code'
import { Image } from '../../components/figure'
import HR from '../../components/hr'

export default () =>
  <Post>
    <Meta id="electron-next" hasCover />

    <P>
      Since the first release of Electron{' '}
      <Link href="https://github.com/electron/electron/releases/tag/v0.1.0">
        in 2013
      </Link>{' '}
      we{`'`}ve come a very long way: With the high goal of conquering native,
      the web{`'`}s ambassadors (you and me) developed various useful projects
      for all kinds of use cases.
    </P>

    <P>
      Nowadays, many of the daily tasks previously handled by native apps are
      now done by software that runs on top of Electron: Editing code (<Link href="https://atom.io">Atom</Link>),
      sending and receiving messages (<Link href="https://www.whatsapp.com/download">
        WhatsApp
      </Link>, <Link href="https://slack.com/downloads">Slack</Link>) or emails
      (<Link href="https://www.nylas.com/nylas-mail/">Nylas Mail</Link>) and
      even complex things like running commands (<Link href="https://hyper.is">Hyper</Link>):
    </P>

    <Tweet id="812011746638569472" className="tweet" />

    <P>
      To sum this up, I don{`'`}t think I have to tell you any more how important
      it is and how big its impact on our industry is today. And yet, it{`'`}s{' '}
      <Link href="https://npm-stat.com/charts.html?package=electron">
        still growing
      </Link>!
    </P>

    <P>
      Of course, these achievements weren{`'`}t completely free of charge:
    </P>

    <P>
      We spent hours convincing our fellow coworkers that a rewrite was
      worth it. We held conferences and spread the word across the whole globe,
      so that all of us may have the ability to convert our app ideas into
      reality.
    </P>

    <P>
      <Link href="https://github.com/electron/electron/graphs/contributors">
        Some of us
      </Link>{' '}
      even contributed our own spare time and spent it reporting issues,
      fixing bugs and making Electron better!
    </P>

    <P>
      Sure, all of this has been very difficult and time consuming.</P>
      But{' '}
      <Link href="https://www.youtube.com/watch?v=oRojY4uZNI8&t=15s">
        let{`'`}s not rest
      </Link>{' '}
      now!
      There{`'`}s still a long road ahead of us: More operating systems and
      devices are waiting for us. We{`'`}re barely halfway there. So much more
      to discover!
    </P>

    <H2>Chapters</H2>

    <P>
      If you want, you can jump directly to a specific section. However, if you
      want to be guided through building an Electron app using Next.js{' '}
      <b>from start to finish</b> (recommended), simply skip to the next
      paragraph.
    </P>

    <UL>
      <LI>
        <Link href="#the-dream">The Dream</Link>
      </LI>
      <LI>
        <Link href="#making-the-dream-come-true">
          Making the Dream Come True
        </Link>
      </LI>
      <LI>
        <Link href="#installing-the-dependencies">
          Installing the Dependencies
        </Link>
      </LI>
      <LI>
        <Link href="#testing-the-boilerplate">Testing the Boilerplate</Link>
      </LI>
      <LI>
        <Link href="#preparing-the-new-renderer">
          Preparing the New Renderer
        </Link>
      </LI>
      <LI>
        <Link href="#preparing-the-main-process">
          Preparing the Main Process
        </Link>
      </LI>
      <LI>
        <Link href="#taking-it-to-production">Taking It to Production</Link>
      </LI>
    </UL>

    <H2>The Dream</H2>

    <P>
      But enough of the 👏 cheering 👏 now. With the above in mind, I{`'`}d like
      to introduce you to a new concept of building Electron apps:
    </P>

    <P>
      So far, we{`'`}ve either been using vanilla JavaScript or some sort of
      custom Webpack/Babel/Gulp setup to handle building the{' '}
      <Link href="https://github.com/electron/electron/blob/3decb5eb28ffacc587c5b8fe201483a8b65b4138/docs/tutorial/quick-start.md#renderer-process">
        renderer process
      </Link>.
    </P>

    <P>
      At <Link href="https://zeit.co">ZEIT</Link>, we{`'`}ve gathered a lot of
      experience with this topic in the past and discovered a much more
      efficient and more straightforward way to handle this:{' '}
      <Link href="https://github.com/zeit/next.js">Next.js</Link>!
    </P>

    <P>
      Yes, I{`'`}m serious. It{`'`}s not just very good for sites and web apps,
      but it also makes creating Electron apps easier than ever before. 
      That{`'`}s because it allows us - as app developers - to
      abstract most of the complex development environment away into a tiny tool
      belt.
    </P>

    <P>
      Once implemented,{' '}
      <Link href="https://github.com/zeit/next.js">Next.js</Link> will take care
      of:
    </P>

    <UL>
      <LI shallow>
        Handling the{' '}
        <Link href="https://github.com/zeit/next.js#routing">routing</Link> and{' '}
        <Link href="https://github.com/zeit/next.js#prefetching-pages">
          prefetching
        </Link>{' '}
        of pre-defined pages
      </LI>
      <LI shallow>Transpiling, bundling and minifying your code</LI>
      <LI shallow>
        Live-reloading all <InlineCode>BrowserWindow</InlineCode> instances that
        are pointing to Next.js pages
      </LI>
      <LI shallow>
        <Link href="https://github.com/zeit/next.js#automatic-code-splitting">
          Splitting
        </Link>{' '}
        your code
      </LI>
      <LI shallow>
        <Link href="https://github.com/zeit/next.js#css">Styling</Link>{' '}
        components and pages using{' '}
        <Link href="https://github.com/zeit/styled-jsx">styled-jsx</Link>
      </LI>
    </UL>

    <P>
      In order for Next.js bundles to fit perfectly into how we{`'`}re building
      Electron apps (and to make deploying easier), we also released{' '}
      <Link href="https://zeit.co/blog/next3-preview">a feature</Link> that lets
      you export static files for the use in the production version of your app.
    </P>

    <P>
      And that{`'`}s <Link href="https://zeit.co/blog/next">
        not even all
      </Link>{' '}
      yet!
    </P>

    <P>
      So why can{`'`}t we have these wonderful features inside an Electron app
      without a complicated configuration setup? Well... Starting today, it{`'`}s
      actually possible! 🎉
    </P>

    <H2>Making the Dream Come True</H2>

    <P>
      As the first step into the light, we{`'`}ll spin up a fresh Electron
      boilerplate. This will make you understand how to create the perfect
      renderer process using Next.js, but also how to implement it into your
      existing application.
    </P>

    <P>
      Thankfully, there's a suitable{' '}
      <Link href="https://github.com/electron/electron-quick-start">
        skeleton app
      </Link>{' '}
      which you can easily clone to your device (<Link href="https://git-scm.com">Git</Link>{' '}
      and <Link href="https://nodejs.org/en/">Node.js</Link> need to be
      installed):
    </P>

    <Code language="bash" syntax={bash}>
      git clone https://github.com/electron/electron-quick-start
    </Code>

    <P>
      Once it has finished setting up a clone that you can interact with on your
      local device, move into the directory of the repository:
    </P>

    <Code language="bash" syntax={bash}>{`cd electron-quick-start`}</Code>

    <H3>Installing the Dependencies</H3>

    <P>
      Now that we got the boilerplate, let{`'`}s make sure that the pre-defined
      dependencies are installed. To do so, you only need to run the following
      command:
    </P>

    <Code language="bash" syntax={bash}>{`npm install`}</Code>

    <P>
      Next, install the remaining dependencies that we{`'`}ll need for the
      renderer. First, we{`'`}ll start with the{' '}
      <InlineCode>devDependencies</InlineCode>: The core package of{' '}
      <Link href="https://github.com/zeit/next.js">Next.js</Link> (used in
      development), <Link href="https://github.com/facebook/react">
        react
      </Link>{' '}
      and{' '}
      <Link href="https://github.com/facebook/react/tree/master/packages/react-dom">
        react-dom
      </Link>{' '}
      (bundled with the production version of your app):
    </P>

    <Code
      language="bash"
      syntax={bash}
    >{`npm install next@beta react react-dom --save-dev`}</Code>

    <P>
      As the last installation step, we need to define{' '}
      <Link href="https://github.com/leo/electron-next">electron-next</Link>,
      which ensures that Electron can handle Next.js{`'`} output in the
      renderer...
    </P>

    <Tweet id="881783902691577856" className="tweet" />

    <P>
      ...and{' '}
      <Link href="https://github.com/sindresorhus/electron-is-dev">
        electron-is-dev
      </Link>, which allows us to change the main process{`'`} behaviour
      depending on the environment the application is running in (you{`'`}ll
      understand why this is important later in this tutorial).
    </P>

    <P>
      They will be used both in production and development, so they need to be
      installed as normal dependencies:
    </P>

    <Code
      language="bash"
      syntax={bash}
    >{`npm install electron-next electron-is-dev --save`}</Code>

    <H3>Testing the Boilerplate</H3>

    <P>
      Before we go on, I suggest ensuring that you{`'`}ve followed the
      instructions carefully. To do so, you can start the boilerplate
      application like this:
    </P>

    <Code language="bash" syntax={bash}>{`npm start`}</Code>

    <P>
      If you{`'`}ve done everything right, a window should open:
    </P>

    <Image
      src="/static/essays/2017/electron-next/without-next.png"
      width="512"
    />

    <P>
      Saw it? Perfect! Now you can go on with the next section and skip the
      following sentence. If not, please repeat the steps from{' '}
      <Link href="#making-the-dream-come-true">here</Link>.
    </P>

    <H3>Preparing the New Renderer</H3>

    <P>
      Looks like we{`'`}re good to go into real detail now. Are you excited? I
      am, at least! So let{`'`}s not waste any more time and talk about how we
      can add our Next.js code to our Electron project.
    </P>

    <P>
      For the module to have something to create a bundle from, we need to
      create a directory called {`"`}renderer{`"`} (I suggest calling the
      directory that contains the main process code {`"`}main{`"`}). Create it
      and then also move into it:
    </P>

    <Code language="bash" syntax={bash}>{`mkdir renderer && cd renderer`}</Code>

    <P>
      Inside this directory, you can build your file and folder structure just
      like you would do in a normal Next.js site. Take{' '}
      <Link href="https://github.com/zeit/now-desktop/tree/be0add76aed5e27a19bbed99f0eb5490ef32a8b6/renderer">
        Now Desktop
      </Link>{' '}
      as an example.
    </P>

    <P>
      For this tutorial however, we{`'`}ll only create the most important
      things: An entry page and the configuration file that tells Next.js how to
      behave correctly. Let{`'`}s start with the entry page (a file named{' '}
      <InlineCode>start.js</InlineCode> inside {`"`}pages{`"`}). For now, we{`'`}ll
      just use basic{' '}
      <Link href="https://facebook.github.io/react/docs/jsx-in-depth.html">
        JSX
      </Link>{' '}
      to print out {`"`}Ahoy, Next.js{`"`} inside an HTML tag:
    </P>

    <Code
      language="javascript"
      syntax={javascript}
    >{`export default () => (\n  <span>This is Next.js speaking</span>\n)`}</Code>

    <P>
      After you{`'`}re done, create the configuration file named{' '}
      <InlineCode>next.config.js</InlineCode>. Inside it, you only need to do
      handle one thing:
    </P>

    <Code language="javascript" syntax={javascript}>{`module.exports = {
  exportPathMap() {
    // Let Next.js know where to find the entry page
    // when it's exporting the static bundle for the use
    // in the production version of your app
    return {
      '/start': { page: '/start' }
    }
  }
}`}</Code>

    <P>
      Now we{`'`}re finished with preparing a basic renderer. In the next
      section, you{`'`}ll learn what you need to do in order for your
      application to properly bundle the code we just added (a.k.a. how to make
      the main process handle it).
    </P>

    <H3>Preparing the Main Process</H3>

    <P>
      In order for the renderer code to be built and reloaded automatically by
      Next.js, we firstly need to load{' '}
      <Link href="https://github.com/leo/electron-next">
        electron-next
      </Link>{' '}
      (which we added as a dependency earlier) and call it inside the existing{' '}
      <InlineCode>main.js</InlineCode> file (contains the main process{`'`}{' '}
      code).
    </P>

    <P>
      On the first line of the file, we{`'`}ll import it:
    </P>

    <Code
      language="javascript"
      syntax={javascript}
    >{`const prepareNext = require('electron-next')`}</Code>

    <P>
      Then the only thing left is calling it. For this to happen, we need to
      replace the existing event listener (which creates a window once the app
      is ready)...
    </P>

    <Code
      language="javascript"
      syntax={javascript}
    >{`app.on('ready', createWindow)`}</Code>

    <P>
      ...with one that does the same but also makes the main process handle the
      new renderer code before creating the window:
    </P>

    <Code
      language="javascript"
      syntax={javascript}
    >{`app.on('ready', async () => {
  await prepareNext('./renderer')
  createWindow()
})`}</Code>

    <P>
      Now the only thing left is pointing the existing{' '}
      <InlineCode>BrowserWindow</InlineCode> instance to the right URL depending
      on the environment the app is running in:
    </P>

    <P>
      In development, it should show the hot-reloading and automatically
      re-building instance of Next.js and in production, it needs to serve the
      static renderer files that were exported in advance (we{`'`}ll talk about
      the exporting soon).
    </P>

    <P>
      So please move back to the first line and load{' '}
      <Link href="https://github.com/sindresorhus/electron-is-dev">
        electron-is-dev
      </Link>, a dependency we{`'`}ve added earlier in{' '}
      <Link href="#installing-the-dependencies">this section</Link>:
    </P>

    <Code
      language="javascript"
      syntax={javascript}
    >{`const isDev = require('electron-is-dev')`}</Code>

    <P>
      Next, switch to the line where the window content gets loaded using the{' '}
      <InlineCode>.loadURL</InlineCode> method and replace it with this:
    </P>

    <Code language="javascript" syntax={javascript}>{`let entry

if (isDev) {
  entry = 'http://localhost:8000/start'
} else {
  entry = url.format({
    pathname: path.join(__dirname, './renderer/start/index.html'),
    protocol: 'file:',
    slashes: true
  })
}

mainWindow.loadURL(entry)`}</Code>

    <P>
      Now, when running <InlineCode>npm start</InlineCode> to start the
      application, you should see this:
    </P>

    <Image src="/static/essays/2017/electron-next/with-next.png" width="450" />

    <P>
      As you can see, Electron is now rendering the entry page that was built by
      Next.js behind the curtains. When making changes to the{' '}
      <InlineCode>start.js</InlineCode> file inside the {`"`}pages{`"`}{' '}
      directory, you{`'`}ll notice that the code is being reloaded
      automatically.
    </P>

    <P>
      From here on, you can start building a full-blown new renderer using
      Next.js inside the {`"`}renderer{`"`} directory – just like you would do
      it when building a web app! 😏
    </P>

    <H3>Taking It to Production</H3>

    <P>
      When reading this section, you{`'`}ve already learned how to implement
      Next.js into an Electron application and take advantage of its development
      workflow. However, you still haven{`'`}t understood how this works in the
      bundled production version of your application. The next few paragraphs
      will tell you.
    </P>

    <P>
      The reason why{' '}
      <Link href="https://github.com/leo/electron-next">
        electron-next
      </Link>{' '}
      doesn{`'`}t have the same behaviour in the final app as in development is
      that opening a port (like Next.js does it for providing hot reloading and
      auto-building of your code) is generally not a good idea because it
      introduces a security vulnerability on the user{`'`}s device.
    </P>

    <P>
      It{`'`}s therefore safe for development, but <b>not for production</b>.
    </P>

    <P>
      What{`'`}s much safer, however, is letting the{' '}
      <InlineCode>BrowserWindow</InlineCode> instances directly access the
      static files of your renderer. This is made possible by{' '}
      <Link href="https://zeit.co/blog/next3-preview#next-export">
        <InlineCode>next export</InlineCode>
      </Link>, a new sub command that we{`'`}ve introduced with{' '}
      <Link href="https://zeit.co/blog/next3-preview">Next.js 3</Link>.
    </P>

    <P>
      For this example, we{`'`}re going to use{' '}
      <Link href="https://github.com/electron-userland/electron-builder">
        electron-builder
      </Link>, a widely used solution for packing your application. Please keep
      in mind that this is not a requirement - you can use any builder of your
      choice, as long as you configure it to do the same as what I{`'`}ll show
      you now...
    </P>

    <P>
      Firstly, install it from{' '}
      <Link href="https://www.npmjs.com/package/electron-builder">npm</Link>:
    </P>

    <Code
      language="bash"
      syntax={bash}
    >{`npm install electron-builder --save-dev`}</Code>

    <P>
      Then you need to modify the <InlineCode>scripts</InlineCode> property to
      include a two new values next to the existing{' '}
      <InlineCode>start</InlineCode> one:
    </P>

    <Code language="json" syntax={json}>{`"scripts": {
  "start": "electron .",
  "build": "next build renderer && next export renderer",
  "dist": "npm run build && build"
}`}</Code>

    <UL>
      <LI>
        <InlineCode>build</InlineCode> will tell Next.js how to build and export
        your renderer
      </LI>
      <LI>
        <InlineCode>dist</InlineCode> makes{' '}
        <Link href="https://github.com/electron-userland/electron-builder">
          electron-builder
        </Link>{' '}
        run the <InlineCode>build</InlineCode> script before packing the app
      </LI>
    </UL>

    <P>
      Afterwards, the final touch of any code file in this tutorial will be to
      add a entirely new property to your <InlineCode>package.json</InlineCode>{' '}
      file: It tells{' '}
      <Link href="https://github.com/electron-userland/electron-builder">
        electron-builder
      </Link>{' '}
      to not wrap the application{`'`}s content into an{' '}
      <Link href="https://github.com/electron-userland/electron-builder/wiki/Options#Config-asar">
        ASAR archive
      </Link>. In addition, it also moves the output generated by{' '}
      <Link href="https://zeit.co/blog/next3-preview#next-export">
        <InlineCode>next export</InlineCode>
      </Link>{' '}
      into position:
    </P>

    <Code language="json" syntax={json}>{`"build": {
  "asar": false
},
"extraResources": [
  {
    "from": "renderer/out",
    "to": "app/renderer"
  }
]`}</Code>

    <P>
      The <InlineCode>build</InlineCode> property is only included because{' '}
      <Link href="https://github.com/leo/electron-next">
        electron-next
      </Link>{' '}
      doesn{`'`}t yet support ASAR archives. If you need this, please{' '}
      <Link href="https://github.com/leo/electron-next/issues">
        let me know
      </Link>, so that I can consider implementing it. Pull requests are also
      very welcome!
    </P>

    <HR />

    <P>
      That{`'`}s it! Now you can test your packaged application in production:
    </P>

    <Code language="bash" syntax={bash}>{`npm run dist`}</Code>

    <P>
      Isn{`'`}t that wonderfully magic? ✨
    </P>

    <P>
      Starting today, you can use Next.js to build wonderful Electron
      applications that will empower and maybe even entertain your audience -
      your call!
    </P>

    <P>
      In order for you to better understand how all of this comes together in
      the end, I also created{' '}
      <Link href="https://github.com/leo/electron-next-skeleton">
        a boilerplate
      </Link>, which sums all of the stuff you{`'`}ve just learned up in one
      repository - feel free to clone it and try it out by yourself!
    </P>

    <P>
      Also make sure to check out{' '}
      <Link href="https://github.com/zeit/next.js">Next.js</Link> and{' '}
      <Link href="https://github.com/leo/electron-next">electron-next</Link>. If
      there{`'`}s anything missing or something needs that needs to be fixed,
      feel free to take part!
    </P>

    <HR />

    <P>Now the only thing left for me to say is:</P>

    <P>
      <b>Thank you</b> for taking the time to read this article! I{`'`}m sure
      that we have the collective power to bring all of the web{`'`}s
      capabilities to native (...and beyond)! 🚀
    </P>

    <P>
      Oh. And you can follow me{' '}
      <Link href="https://twitter.com/notquiteleo">on Twitter</Link> if you want
      to stay updated about how this technique evolves and when I discover new
      ways to make it even easier. Enjoy the rest of your day!
    </P>
  </Post>
