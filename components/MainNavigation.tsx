import Link from 'next/link';
import Logo from '@/components/Logo';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import AuthButton from '@/components/AuthButton';

export default function MainNavigation() {
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
              <AuthButton />
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
