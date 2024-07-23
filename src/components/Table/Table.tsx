import React, { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, SortingState } from '@tanstack/react-table';
import useStudents from '../../hooks/useStudents';
import { IStudent, ColumnFiltersState, TableMeta } from '../../types/types';
import { COLUMNS } from '../columns/columns';
import DebouncedInput from '../DebouncedInput/DebouncedInput';
import DropDownSort from '../DropDownSort/DropDownSort';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';
import styles from './Table.module.css';

const Table = () => {
    const columns = useMemo(() => COLUMNS, []);
    const { data, setData } = useStudents();
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    
    const table = useReactTable<IStudent>({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            columnFilters,
            sorting,
        },
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        meta: {
            removeRow: (rowIndex: number) => {
                setData(old => old.filter((_, index) => index !== rowIndex));
            }
        } as TableMeta<IStudent>
    });

    return (
        <>
            <div className={styles.filterSortContainer}>
                <DebouncedInput 
                    value={columnFilters[0]?.value ?? ''} 
                    onChange={value => setColumnFilters([{
                        id: 'name',
                        value: String(value)
                    }])}
                    placeholder='Поиск по имени'
                />
                <DropDownSort sorting={sorting} setSorting={setSorting}/>
            </div>
            <table className={styles.table}>
                <TableHeader headerGroups={table.getHeaderGroups()} />
                <tbody className={styles.tbody}>
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.id} row={row} table={table} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;
