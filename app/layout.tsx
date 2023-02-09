import '@styles/globals.css';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
