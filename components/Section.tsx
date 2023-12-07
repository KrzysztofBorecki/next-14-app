import * as React from 'react';
import { cn } from '@/lib/utils';

const SectionsContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('container flex-1 flex flex-col gap-64', className)}
    {...props}
  />
));
SectionsContainer.displayName = 'SectionsContainer';

const SectionPrimaryHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn('px-12 py-5 md:py-10 text-3xl md:text-6xl tracking-tighter font-bold', className)}
    {...props}
  />
));
SectionPrimaryHeading.displayName = 'SectionPrimaryHeading';

const SectionSecondaryHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('px-12 py-10 text-xl md:text-2xl font-bold', className)}
    {...props}
  />
));
SectionSecondaryHeading.displayName = 'SectionSecondaryHeading';

export { SectionsContainer, SectionPrimaryHeading, SectionSecondaryHeading };
