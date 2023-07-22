import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import 'moment/locale/tr'; 
import IndeterminateCheckbox from "./IndeterminateCheckbox";

const columnHelper = createColumnHelper();

export const columnDef = [
  columnHelper.accessor("id", {
    header: "Şirket ID",
  }),
  {
    accessorFn: (row) => `${row.company_name}`,
    header: "Şirket Adı",
  },
  {
    accessorKey: "room_name",
    header: "Rezerve Edilen Oda",
  },
  {
    accessorKey: "start_time",
    header: "Rezerve Başlangıcı",
  },
  {
    accessorKey: "end_time",
    header: "Rezerve Bitişi",
  },
  {
    accessorKey: "date",
    header: "Tarih",
    cell: ({ getValue }) => moment(new Date(getValue())).format("LL"),
  },
];


export const columnDefWithCellMerge = [
  {
    accessorFn: (row) => `${row.company_name} ${row.room_name}`,
    header: "Şirket Adı",
  },
];

export const columnDefWithGrouping = [
  columnHelper.accessor("id", {
    header: "Şirket ID",
  }),
  {
    header: "Şirket Adı",
    columns: [
      {
        accessorFn: (row) => `${row.company_name}`,
        header: "Şirket Adı",
      },
      {
        accessorKey: "room_name",
        header: "Rezerve Edilen Oda",
      },
    ],
  },
  {
    accessorKey: "start_time",
    header: "Rezerve Başlangıcı",
  },
  {
    accessorKey: "end_time",
    header: "Rezerve Bitişi",
  },
  {
    accessorKey: "date",
    header: "Tarih",
  },
];

//Filtre ile birlikte colmnDef

export const columnDefWithFilter = [
  columnHelper.accessor("id", {
    header: "Şirket ID",
    enableColumnFilter: false,
  }),
  {
    accessorFn: (row) => `${row.company_name}`,
    header: "Şirket Adı",
  },
  {
    accessorKey: "room_name",
    header: "Rezerve Edilen Oda",
  },
  {
    accessorKey: "start_time",
    header: "Rezerve Başlangıcı",
  },
  {
    accessorKey: "end_time",
    header: "Rezerve Bitişi",
  },
  {
    accessorKey: "date",
    header: "Tarih",
    cell: ({ getValue }) => moment(new Date(getValue())).format("LL"),
  },
];

export const columnDefWithCheckBox = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  columnHelper.accessor("id", {
    header: "Şirket ID",
  }),
  {
    accessorFn: (row) => `${row.company_name}`,
    header: "Şirket Adı",
  },
  {
    accessorKey: "room_name",
    header: "Rezerve Edilen Oda",
  },
  {
    accessorKey: "start_time",
    header: "Rezerve Başlangıcı",
  },
  {
    accessorKey: "end_time",
    header: "Rezerve Bitişi",
  },
  {
    accessorKey: "date",
    header: "Tarih",
    cell: ({ getValue }) => moment(new Date(getValue())).format("LL"),
  },
];