import Head from 'next/head'

const root = 'https://leo.im'

const Index = () => (
  <main>
    <Head>
      <title>Leo Lamprecht</title>

      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta name="description" content="Head of Product, Vercel" />
      <meta name="twitter:site" content="@notquiteleo" />
      <meta name="twitter:creator" content="@notquiteleo" />

      <link rel="icon" href="/initials.svg" />
    </Head>

    <section>
      <h2>Just call me</h2>
      <h1>Leo!</h1>
    </section>

    <nav>
      <a href="https://vercel.com" target="_blank">Mission</a>
      <a href="https://twitter.com/notquiteleo" target="_blank">Thoughts</a>
      <a href="https://github.com/leo" target="_blank">Code</a>
      <a href="https://dribbble.com/notquiteleo" target="_blank">Visuals</a>
    </nav>

    <style jsx>
      {`
        main {
          padding: 30px;
          box-sizing: border-box;
          position: relative;
          min-height: 100%;
        }

        section h1 {
          font-size: 57px;
          left: 35px;
          top: 35px;
          font-weight: 300;
          margin: 0;
          position: absolute;
          padding-right: 35px;
          line-height: 1.2em;
        }

        section h1:focus {
          outline: none;
        }

        section h2 {
          display: none;
        }

        nav {
          position: absolute;
          left: 25px;
          bottom: 27px;
        }

        nav a {
          text-decoration: none;
          color: #000;
          font-size: 16px;
          padding: 10px;
          display: block;
        }

        @media (min-width: 768px) {
          main {
            padding: 45px;
          }

          section {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            text-align: center;
            display: flex;
            height: inherit;
            align-items: center;
            justify-content: center;
            user-select: none;
            cursor: default;
          }

          section h1 {
            position: relative;
            display: inline-block;
            left: auto;
            top: auto;
            padding-right: 0;
            font-size: 73px;
            font-weight: 300;
          }

          section h1::before,
          section h1::after {
            font-size: 32px;
            line-height: 0;
            height: 20px;
            position: absolute;
            font-weight: 300;
          }

          section h1::before {
            content: '„';
            top: 10px;
            right: -15px;
          }

          section h1::after {
            content: '„';
            left: -15px;
            bottom: 0;
          }

          section h2 {
            margin: 8px 40px 0 0;
            display: inline-block;
            font-weight: 300;
          }

          nav {
            left: 30px;
            right: 30px;
            white-space: nowrap;
            text-align: center;
            bottom: 30px;
            font-size: 0;
          }

          nav a {
            font-size: 15px;
            padding: 4px 10px;
            display: inline-block;
            border-radius: 6px;
            margin: 0 5px;
            transition: all 0.2s;
          }

          nav a:hover {
            background: #efefef;
          }
        }

        @media (max-height: 390px) and (min-width: 768px) {
          nav {
            display: none;
          }
        }
      `}
    </style>

    <style jsx global>
      {`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          margin: 0;
          -webkit-font-smoothing: antialiased;
        }

        html,
        body {
          height: 100%;
        }

        body > div:first-child,
        body > div:first-child > div:first-child,
        body > div:first-child > div:first-child > div {
          height: inherit;
        }
      `}
    </style>
  </main>
)

export default Index
