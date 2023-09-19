import { FC } from "react";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  className: string;
  type: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  onClick,
  text,
  disabled,
  className,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-indigo-600 ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
