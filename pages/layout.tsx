import { useMetadata } from '@ronin/blade/server/hooks';

import type { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  useMetadata({
    title: 'Leo Lamprecht',
    description: 'RONIN CEO. Previously 1st Head of Product at Vercel.',
    icon: '/initials.svg',
    x: {
      creator: '@leo',
    },
  });

  return (
    <html className="h-full" lang="en">
      <body className="antialiased m-0 h-full">{children}</body>
    </html>
  );
};

export default RootLayout;
