import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  transparent?: boolean
}

const IconButton = ({ children, transparent, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className={
        transparent
        ? "bg-black border border-white/10 rounded-lg p-1.5"
        : " bg-white/10 border border-white/10 rounded-lg p-1.5"
      }
    >
      {children}
    </button>
  );
};

export default IconButton;
