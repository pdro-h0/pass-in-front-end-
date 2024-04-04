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
import { ChangeEvent, useEffect, useState } from "react";
// import { attendees } from "../data/attendees";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Attendee {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}

const AttendeeList = () => {
  const [search, setSearch] = useState<string>(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    } else {
      return "";
    }
  });
  const [page, setPage] = useState<number>(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"));
    } else {
      return 1;
    }
  });

  // const [total, setTotal] = useState<number>(0);
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  const totalPages = Math.ceil(attendees.length / 10);

  useEffect(() => {
    const url = new URL(
      "http://localhost:3333/event/81fc59e6-cd5c-4444-8cbe-3860f8499b47/attendees"
    );

    url.searchParams.set("pageIndex", String(page - 1));

    if (search.length > 0) {
      url.searchParams.set("query", search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data.attendees);
        // console.log(data);
        // setTotal(data.total);
      });
  }, [page, search]);

  const setCurrentSearch = (search: string) => {
    const url = new URL(window.location.toString());

    url.searchParams.set("search", search);

    window.history.pushState({}, "", url);

    setSearch(search);
  };

  const setCurrentPage = (page: number) => {
    const url = new URL(window.location.toString());

    url.searchParams.set("page", String(page));

    window.history.pushState({}, "", url);

    setPage(page);
  };

  const goToNextPage = () => {
    // setPage((prevPage) => prevPage + 1);

    setCurrentPage(page + 1);
  };

  const goToPrevPage = () => {
    // setPage((prevPage) => prevPage - 1);

    setCurrentPage(page - 1);
  };

  const goToFirstPage = () => {
    // setPage(1);

    setCurrentPage(1);
  };

  const goToLastPage = () => {
    // setPage(totalPages);

    setCurrentPage(totalPages);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    setCurrentSearch(event.target.value);

    // setPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border flex items-center gap-3 border-white/10 bg-transparent rounded-lg text-sm">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={handleSearch}
            type="text"
            value={search}
            className="flex-1 bg-transparent outline-none border-0 text-sm p-0 focus:ring-0"
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
            >
              .
            </TableHeader>
          </tr>
        </thead>

        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              <TableRow
                key={attendee.id}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <TableCells className="py-3 px-4 text-sm  text-left text-zinc-300">
                  <input
                    type="checkbox"
                    checked={attendee.checkedInAt !== null}
                    className="size-4 checked:text-orange-400 bg-black/20 rounded border border-white/10"
                  />
                </TableCells>
                <TableCells>{attendee.id}</TableCells>
                <TableCells>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email.toLocaleLowerCase()}</span>
                  </div>
                </TableCells>
                <TableCells>
                  {formatDistanceToNow(attendee.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </TableCells>
                <TableCells>
                  {attendee.checkedInAt !== null ? (
                    formatDistanceToNow(attendee.checkedInAt, {
                      locale: ptBR,
                      addSuffix: true,
                    })
                  ) : (
                    <p className="text-zinc-400">
                      <i>Não fez check-in</i>
                    </p>
                  )}
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
              Mostrando {attendees.length} de {attendees.length} items
            </TableCells>
            <TableCells
              className="py-3 px-4 text-sm  text-right text-zinc-300"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPrevPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
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
