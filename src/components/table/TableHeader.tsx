import { ComponentProps, ReactNode } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {
  children: ReactNode;
}

const TableHeader = ({ children, ...props }: TableHeaderProps) => {
  return (
    <th className="py-3 px-4 text-sm font-semibold text-left" {...props}>
      {children}
    </th>
  );
};

export default TableHeader;
