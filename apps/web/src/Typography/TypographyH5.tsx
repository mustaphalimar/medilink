import { ReactNode } from "react";

export function TypographyH5({ children }: { children: ReactNode }) {
  return (
    <h5 className="scroll-m-20 text-base font-semibold tracking-tight">
      {children}
    </h5>
  );
}
