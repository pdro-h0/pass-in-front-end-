import { ComponentProps, ReactNode } from "react";

interface NavLinkProps extends ComponentProps<"a">{
    children: ReactNode
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <a {...props} className="font-medium text-sm">
      {children}
    </a>
  );
};

export default NavLink