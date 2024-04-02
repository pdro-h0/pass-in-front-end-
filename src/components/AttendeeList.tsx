import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

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

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de incrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map(() => {
              return (
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 text-sm  text-left text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 checked:text-orange-400 bg-black/20 rounded border border-white/10"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm  text-left text-zinc-300">
                    5432
                  </td>
                  <td className="py-3 px-4 text-sm  text-left text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Pedro Henrique de Almeida
                      </span>
                      <span>pedro@test.com.br</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm  text-left text-zinc-300">
                    7 dias atras
                  </td>
                  <td className="py-3 px-4 text-sm  text-left text-zinc-300">
                    3 dias atras
                  </td>
                  <td className="py-3 px-4 text-sm  text-left text-zinc-300">
                    <button className="bg-black border border-white/10 rounded-lg p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 229 items
              </td>
              <td
                className="py-3 px-4 text-sm  text-right text-zinc-300"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>

                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-lg p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-lg p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-lg p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-lg p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AttendeeList;
