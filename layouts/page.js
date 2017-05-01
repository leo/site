// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

// Other
import { version } from '../package'

let progress

const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

// Only show progress bar if page
// transition takes longer than 200 milliseconds
Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

// Log a sweet message in the browser
// Showing the version and GitHub repository
if (global.document) {
  const info = [
    `Version: ${version}`,
    `Find the code here: https://github.com/leo/site`,
    `Have a great day! :)`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const viewSource = event => {
  const allowed = ['P', 'H1', 'SPAN']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  document.location = 'https://github.com/leo/site'
  event.preventDefault()
}

export default ({ children }) => (
  <main onDoubleClick={viewSource}>
    <Head>
      <link
        rel="mask-icon"
        href="http://leo.im/static/lightning.svg"
        color="#000000"
      />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="icon" href="/static/touch-icon.png" type="image/png" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta
        name="description"
        content="A teenager's view on web development and intuitive UI design."
      />
      <meta name="twitter:site" content="@notquiteleo" />
    </Head>

    {children}

    <style jsx global>
      {`
      body {
        font-family: -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }

      html, body, body > div > div > div {
        height: 100vh;
      }

      main {
        padding: 30px;
        box-sizing: border-box;
        position: relative;
        min-height: 100%;
      }

      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #4492ff;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

      @media (min-width: 768px) {
        main {
          padding: 45px;
        }
      }
    `}
    </style>
  </main>
)
