interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Container({ className = "", children, as: Tag = "div", ...rest }: ContainerProps) {
  return (
    <Tag className={`max-w-[1200px] mx-auto px-6 md:px-12 ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
