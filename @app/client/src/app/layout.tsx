import '@cms/packages/config/global.css';
import Providers from '@/components/Providers';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
