'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SectionsContainer, SectionSecondaryHeading } from '@/components/Section';
import { RefreshCcw as RefreshIcon, Frown as AlertIcon } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SectionsContainer className="sm:max-w-md">
      <section className="flex-1 flex flex-col w-full items-center justify-center text-foreground">
        <AlertIcon className="h-16 w-16" />
        <SectionSecondaryHeading>
          Something went wrong!
        </SectionSecondaryHeading>
        <Button
          className="px-2 md:px-4 w-full group"
          onClick={
            () => reset()
          }
        >
          Try again
          <RefreshIcon className="ml-2 h-4 w-4 transition-transform group-hover:-rotate-180" />
        </Button>
      </section>
    </SectionsContainer>
  );
}
