import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";
import IconButton from "./IconButton";
import Table from "./table/Table";
import TableHeader from "./table/TableHeader";
import TableCells from "./table/TableCells";
import TableRow from "./table/TableRow";

const AttendeeList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border flex items-center gap-3 border-white/10 bg-transparent rounded-lg text-sm">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none border-0 text-sm p-0"
            placeholder="Buscar participantes..."
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader
              style={{ width: 48 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            >
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Código
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Participante
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Data de incrição
            </TableHeader>
            <TableHeader className="py-3 px-4 text-sm font-semibold text-left">
              Data do check-in
            </TableHeader>
            <TableHeader
              style={{ width: 64 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            >.</TableHeader>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 10 }).map(() => {
            return (
              <TableRow className="border-b border-white/10 hover:bg-white/5">
                <TableCells className="py-3 px-4 text-sm  text-left text-zinc-300">
                  <input
                    type="checkbox"
                    className="size-4 checked:text-orange-400 bg-black/20 rounded border border-white/10"
                  />
                </TableCells>
                <TableCells>
                  5432
                </TableCells>
                <TableCells>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Pedro Henrique de Almeida
                    </span>
                    <span>pedro@test.com.br</span>
                  </div>
                </TableCells>
                <TableCells>
                  7 dias atras
                </TableCells>
                <TableCells>
                  3 dias atras
                </TableCells>
                <TableCells>
                  <IconButton transparent={true}>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCells>
              </TableRow>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <TableCells colSpan={3}>
              Mostrando 10 de 229 items
            </TableCells>
            <TableCells
              className="py-3 px-4 text-sm  text-right text-zinc-300"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCells>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default AttendeeList;
