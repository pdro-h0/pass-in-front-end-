import { ComponentProps, ReactNode } from "react";

interface TableCellsProps extends ComponentProps<"td"> {
  children: ReactNode;
}

const TableCells = ({ children, ...props }: TableCellsProps) => {
  return (
    <td className="py-3 px-4 text-sm font-semibold text-left" {...props}>
      {children}
    </td>
  );
};

export default TableCells;
