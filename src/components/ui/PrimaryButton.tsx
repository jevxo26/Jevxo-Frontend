import { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const PrimaryButton = ({
  children,
  className = "",
  type = "button",
  ...rest
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={`px-7 py-3 rounded-2xl bg-secondary text-black font-medium text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(216,171,90,0.80)] active:scale-[0.98] cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
