import './globals.css';
import { GeistSans } from 'geist/font/sans';
import AuthButton from '../components/AuthButton';
import Logo from '@/components/Logo';
import Link from 'next/link';
import type { ReactNode } from 'react';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Corporate website example',
  description: 'Example of a corporate website built with Next.js, TypeScript, Supabase and Tailwind CSS.',
  keywords: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Supabase', 'Tailwind CSS'],
  authors: { name: 'Krzysztof Borecki', url: 'https://github.com/K3orecki' },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen flex flex-col items-center justify-between font-sans antialiased bg-background text-foreground ">
        <header className="w-full flex flex-col items-center fixed top-0 z-40">
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-background/95 backdrop-blur-sm">
            <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm text-foreground">
              <Logo />
              <ul className="flex gap-1">
                <li>
                  <Link
                    href="/"
                    className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <AuthButton />
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="w-full flex-1 flex flex-col items-center">
          {children}
        </main>

        <footer className="w-full flex flex-col items-center pt-12 pb-16 border-t border-t-foreground/10 text-sm">
          <h2>
            Footer
          </h2>
        </footer>
      </body>
    </html>
  );
}
