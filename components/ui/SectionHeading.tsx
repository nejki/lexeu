import { SectionLabel } from "@/components/ui/SectionLabel";
import { twMerge } from "tailwind-merge";

interface SectionHeadingProps {
  /** Uppercase label above the heading (e.g. "Purpose", "FAQ") */
  label?: string;
  /** Class overrides for the label (passed to SectionLabel) */
  labelClassName?: string;
  /** Plain text portion of the heading */
  title: React.ReactNode;
  /** Accent/italic text rendered inside <em> */
  highlight?: string;
  /** Separator between title and highlight — defaults to " " (space) */
  separator?: React.ReactNode;
  /** Color class for the <em> highlight — defaults to "text-accent" */
  highlightColor?: string;
  /** Optional paragraph below the heading */
  description?: React.ReactNode;
  /** Class overrides for the h2 */
  headingClassName?: string;
  /** Class overrides for the description paragraph */
  descriptionClassName?: string;
}

export function SectionHeading({
  label,
  labelClassName = "mb-5",
  title,
  highlight,
  separator = " ",
  highlightColor = "text-accent",
  description,
  headingClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <>
      {label && (
        <SectionLabel className={labelClassName}>{label}</SectionLabel>
      )}
      <h2
        className={twMerge(
          "font-serif text-heading-md font-semibold leading-[1.1] text-site-text",
          headingClassName,
        )}
      >
        {title}
        {highlight && (
          <>
            {separator}
            <em className={`italic ${highlightColor}`}>{highlight}</em>
          </>
        )}
      </h2>
      {description && (
        <p className={twMerge("text-[15px] text-site-mid leading-[1.85]", descriptionClassName)}>
          {description}
        </p>
      )}
    </>
  );
}
