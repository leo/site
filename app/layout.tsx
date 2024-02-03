import '@styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Leo Lamprecht',
  description: 'RONIN CEO. Previously 1st Head of Product at Vercel.',
  twitter: {
    creator: '@notquiteleo',
  },
  icons: {
    icon: '/initials.svg',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
