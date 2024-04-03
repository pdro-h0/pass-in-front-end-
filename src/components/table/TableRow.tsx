import { ComponentProps, ReactNode } from "react";

interface TableRowProps extends ComponentProps<"tr"> {
  children: ReactNode;
}

const TableRow = ({ children, ...props }: TableRowProps) => {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5" {...props}>
      {children}
    </tr>
  );
};

export default TableRow;
