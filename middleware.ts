import { createClient } from '@/utils/supabase/middleware';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);

  await supabase.auth.getSession();

  return response;
}
