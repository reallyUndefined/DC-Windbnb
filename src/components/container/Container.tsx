interface ContainerProps {
  className?: string;
}
function Container({
  children,
  className,
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={`max-w-[79.5rem] mx-auto px-3 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
