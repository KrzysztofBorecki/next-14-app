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

export { SectionsContainer };
