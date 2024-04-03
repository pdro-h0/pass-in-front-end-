import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  transparent?: boolean;
}

const IconButton = ({ children, transparent, ...props }: IconButtonProps) => {
  const { disabled } = { ...props };

  return (
    <button
      {...props}
      className={`   ${
        transparent
          ? "bg-black border border-white/10 rounded-lg p-1.5"
          : " bg-white/10 border border-white/10 rounded-lg p-1.5"
      }
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
