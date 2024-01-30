'use server';

import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import MainNavigationMenu from '@/components/MainNavigationMenu';
import Logo from '@/components/Logo';

export default async function MainNavigation() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="w-full sticky top-0 z-40">
      <nav className="w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-sm">
        <div className="container h-navbar flex justify-between items-center">
          <Logo />
          <MainNavigationMenu userEmail={user?.email}/>
        </div>
      </nav>
    </header>
  );
}
