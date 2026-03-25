import { ReactNode } from "react";

type Breakpoint = "md" | "lg";

interface ResponsiveTableProps<T> {
  /** Data array to render */
  data: T[];
  /** Unique key extractor for each item */
  keyExtractor: (item: T) => string;
  /** Render the mobile cards view (receives the full data array) */
  renderCards: (data: T[], keyExtractor: (item: T) => string) => ReactNode;
  /** Render the desktop table view (receives the full data array) */
  renderTable: (data: T[], keyExtractor: (item: T) => string) => ReactNode;
  /** Breakpoint at which to switch from cards to table. Default: "lg" */
  breakpoint?: Breakpoint;
}

const hiddenBelow: Record<Breakpoint, string> = {
  md: "hidden md:block",
  lg: "hidden lg:block",
};

const hiddenAbove: Record<Breakpoint, string> = {
  md: "md:hidden",
  lg: "lg:hidden",
};

export function ResponsiveTable<T>({
  data,
  keyExtractor,
  renderCards,
  renderTable,
  breakpoint = "lg",
}: ResponsiveTableProps<T>) {
  return (
    <>
      {/* Mobile card layout */}
      <div className={hiddenAbove[breakpoint]}>
        {renderCards(data, keyExtractor)}
      </div>

      {/* Desktop table layout */}
      <div className={`${hiddenBelow[breakpoint]} overflow-x-auto`}>
        {renderTable(data, keyExtractor)}
      </div>
    </>
  );
}
