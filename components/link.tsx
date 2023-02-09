'use client';

import type { ReactNode } from 'react';

const twitterURL = 'https://twitter.com/notquiteleo';

const emailPrefix = 'bWFpbHRvOmxlby5sYW1wcmVjaHQ=';
const emailSuffix = 'aWNsb3VkLmNvbQ==';

const onMouseEnter = (event) => {
  const { target } = event;
  const prefix = atob(emailPrefix);
  const suffix = atob(emailSuffix);
  const email = `${prefix}@${suffix}`;

  target.href = email;
};

const onMouseLeave = (event) => {
  const { target } = event;
  target.href = twitterURL;
};

interface LinkProps {
  children: ReactNode;
  href?: string;
  toggleEmail?: boolean;
}

const Link = ({ children, href, toggleEmail }: LinkProps) => (
  <a
    href={href || twitterURL}
    target="_blank"
    onMouseEnter={toggleEmail && onMouseEnter}
    onMouseLeave={toggleEmail && onMouseLeave}
    className="text-base no-underline text-black p-2.5 block md:rounded-md md:py-1 md:px-2.5 md:mx-1.5 md:transition md:duration-200 md:hover:bg-neutral-200/60"
  >
    {children}
  </a>
);

export default Link;
