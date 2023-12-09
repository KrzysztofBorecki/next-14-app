'use client';

import { usePathname } from 'next/navigation';
import { signOut } from '@/app/actions';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from '@/components/Logo';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import { Home } from 'lucide-react';

export default function MainNavigation({
  userEmail
}: {
  userEmail: string | undefined
}) {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-40">
      <nav className="w-full border-b border-b-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-sm">
        <div className="container h-navbar flex justify-between items-center">
          <Logo />
          <ul className="flex items-center gap-1">
            <li>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'px-2 md:px-4',
                  'hover:bg-transparent hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
                  pathname === '/' ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                <p className="invisible w-0 sm:visible sm:w-auto">Home</p>
                <Home className="sm:invisible sm:w-0" />
              </Link>
            </li>
            <li>
              {userEmail ? (
                <div className="flex items-center gap-4 font-medium text-foreground/60">
                  Hi, {userEmail}!
                  <form action={signOut}>
                    <button className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'px-2 md:px-4',
                      'hover:bg-transparent hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
                    )}>
                      Logout
                    </button>
                  </form>
                </div>
              ) : (
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'px-2 md:px-4',
                    'hover:bg-transparent hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0',
                    pathname === '/login' ? 'text-foreground' : 'text-foreground/60',
                  )}
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
