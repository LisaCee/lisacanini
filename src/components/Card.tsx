interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasTopBorder?: boolean;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hasTopBorder?: boolean;
}

export default function Card({
  children,
  hasTopBorder = false,
  className = "",
  ...props
}: CardProps) {
  return (
		<div
			className={`
        bg-surface
        border border-accent/30
        rounded-card
        ${hasTopBorder ? "border-t-16 border-t-accent" : ""}
        ${className}
      `}
			{...props}
		>
			{children}
		</div>
  );
}