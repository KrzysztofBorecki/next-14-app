import '@/app/globals.css';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/ThemeProvider';
import MainNavigation from '@/components/MainNavigation';
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

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen flex flex-col',
        `${fontSans.variable} font-sans antialiased`
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNavigation />
          <main className="w-full flex-1 flex flex-col items-center relative">
            {children}
          </main>
          <footer className="w-full flex flex-col items-center pt-12 pb-16 border-t border-t-foreground/10 text-sm">
            <h2>
              Footer
            </h2>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
