import React from 'react';
import { Row, flexRender } from '@tanstack/react-table';
import styles from '../Table.module.css';
import { IStudent } from '../../../types/types';

type TableRowProps = {
    row: Row<IStudent>;
    table: any;
};

const TableRow = ({ row, table }: TableRowProps) => (
    <tr key={row.id}>
        {row.getVisibleCells().map(cell => (
            <td className={styles.td} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
        ))}
    </tr>
);

export default TableRow;