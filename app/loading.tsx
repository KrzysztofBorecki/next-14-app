import Spinner from '@/components/Spinner';

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col w-full items-center justify-center gap-4">
      <Spinner className="stroke-muted-foreground/60 w-16 h-16" />
      <p className="text-muted-foreground/60 text-sm">
        Loading...
      </p>
    </div>
  );
}
