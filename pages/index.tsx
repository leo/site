import Head from 'next/head';
import Link from '@components/link';

const twitterURL = 'https://twitter.com/notquiteleo';

const emailPrefix = 'bWFpbHRvOmxlby5sYW1wcmVjaHQ=';
const emailSuffix = 'aWNsb3VkLmNvbQ==';

const Index = () => {
  const onContactHover = (event) => {
    const { target } = event;
    const prefix = atob(emailPrefix);
    const suffix = atob(emailSuffix);
    const email = `${prefix}@${suffix}`;

    target.href = email;
  };

  const onContactBlur = (event) => {
    const { target } = event;
    target.href = twitterURL;
  };

  return (
    <main className="p-8 box-border relative min-h-full md:p-11">
      <Head>
        <title>Leo Lamprecht</title>

        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="Building something new. Previously Head of Product at Vercel." />
        <meta name="twitter:site" content="@notquiteleo" />
        <meta name="twitter:creator" content="@notquiteleo" />

        <link rel="icon" href="/initials.svg" />
      </Head>

      <section className="md:absolute md:inset-0 md:text-center md:flex md:h-full md:items-center md:justify-center md:select-none md:cursor-default">
        <h2 className="text-2xl hidden md:inline-block md:font-light md:mt-2 md:mr-10 md:ml-0 md:mb-0">
          Just call me
        </h2>
        <h1 className="text-6xl font-light m-0 absolute top-9 left-9 pr-9 md:relative md:inline-block md:left-auto md:top-auto md:pr-0 md:font-light md:text-7xl">
          Leo
        </h1>
      </section>

      <nav className="absolute left-7 bottom-7 flex flex-col md:left-8 md:right-8 md:bottom-8 md:flex-row md:justify-center">
        <Link href="https://vercel.com">Mission</Link>
        <Link href={twitterURL}>Thoughts</Link>
        <Link href="https://github.com/leo">Code</Link>
        <Link href="https://dribbble.com/notquiteleo">Visuals</Link>

        <Link href={twitterURL} onMouseEnter={onContactHover} onMouseLeave={onContactBlur}>
          Contact
        </Link>
      </nav>

      <style jsx>
        {`
          @media (min-width: 768px) {
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
          }

          @media (max-height: 390px) and (min-width: 768px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </main>
  );
};

export default Index;
