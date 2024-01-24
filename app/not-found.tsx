import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SectionsContainer, SectionSecondaryHeading } from '@/components/Section';
import { buttonVariants } from '@/components/ui/button';
import { Frown as AlertIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <SectionsContainer className="sm:max-w-md">
      <section className="flex-1 flex flex-col w-full items-center justify-center text-foreground">
        <AlertIcon className="h-16 w-16" />
        <SectionSecondaryHeading>
          404 - Page not found
        </SectionSecondaryHeading>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'w-full group'
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {' '}
          Return Home
        </Link>
      </section>
    </SectionsContainer>
  );
}
