export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={() => onClick?.()}>Children: {children}</button>;
};
