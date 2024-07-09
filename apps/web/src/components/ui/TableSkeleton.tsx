import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-10 w-full bg-foreground/20" />
      <div className="space-y-2">
        <Skeleton className="h-10 w-full bg-foreground/10" />
        <Skeleton className="h-10 w-full bg-foreground/10" />
        <Skeleton className="h-10 w-full bg-foreground/10" />
        <Skeleton className="h-10 w-full bg-foreground/10" />
        <Skeleton className="h-10 w-full bg-foreground/10" />
      </div>
    </div>
  );
}
