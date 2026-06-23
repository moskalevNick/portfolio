interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-800 bg-surface px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-neutral-700 hover:text-foreground">
      {children}
    </span>
  );
}
