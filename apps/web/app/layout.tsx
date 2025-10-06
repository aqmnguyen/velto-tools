import localFont from 'next/font/local';
import { Providers } from '@/components/Providers';
import Navigation from '@/components/Navigation';
import '@/styles/globals.css';
import styles from '@/styles/page.module.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-foreground bg-background`}
      >
        <Providers>
          <Navigation />
          <div className={styles.page}>
            <main className={styles.main}>
              <div className='flex w-full sm:w-[700px] mx-auto px-4 sm:px-0 flex-col items-center gap-5 rounded-large bg-content1 py-6 sm:py-8 shadow-small'>
                {children}
              </div>
            </main>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
