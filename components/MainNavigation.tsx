import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import { signOut } from '@/app/actions';
import Link from 'next/link';
import Logo from '@/components/Logo';
import ThemeToggleButton from '@/components/ThemeToggleButton';

export default async function MainNavigation() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="w-full flex flex-col items-center fixed top-0 z-40">
      <nav
        className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-background/95 backdrop-blur-sm">
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
              {user ? (
                <div className="flex items-center gap-4">
                  Hi, {user.email}!
                  <form action={signOut}>
                    <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                      Logout
                    </button>
                  </form>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
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
