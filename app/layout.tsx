import '@styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Leo Lamprecht',
  description: 'Building something new. Previously Head of Product at Vercel.',
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
