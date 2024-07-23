import { TableMeta as TanstackTableMeta } from '@tanstack/react-table';

export type TableMeta<IStudent> = TanstackTableMeta<IStudent> & {
    removeRow: (rowIndex: number) => void;
};

export interface IStudent {
    id: number;
    email: string;
    name: string;
    sex: string;
    specialty: string;
    group: string;
    color: string;
    rating: number;
    birthday: string;
    avatar: string;
}

export type ColumnFilter = {
    id: string;
    value: string;
}

export type ColumnFiltersState = ColumnFilter[];

export type MobileSorting = {
    id: string;
    desc: boolean;
}