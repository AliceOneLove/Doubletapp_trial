import React from 'react';
import { HeaderGroup, flexRender } from '@tanstack/react-table';
import styles from '../Table.module.css';
import { IStudent } from '../../../types/types';

type TableHeaderProps = {
    headerGroups: HeaderGroup<IStudent>[];
};

const TableHeader = ({ headerGroups }: TableHeaderProps) => (
    <thead className={styles.thead}>
        {headerGroups.map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th className={styles.th} key={header.id}>
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                        )}
                    </th>
                ))}
            </tr>
        ))}
    </thead>
);

export default TableHeader;