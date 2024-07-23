import React from 'react';
import { IStudent, TableMeta } from '../../../types/types';
import { Row, Table, CellContext } from '@tanstack/react-table';
import styles from '../Table.module.css';

type RemoveBtnCellProps = CellContext<IStudent, unknown>;

const RemoveBtnCell = ({ row, table }: RemoveBtnCellProps) => {
  const meta: any = table.options.meta;
  const removeRow = () => meta.removeRow(row.index);

  return (
    <button 
      className={styles.btn}
      onClick={removeRow}
      name='remove'
    />
  );
};

export default RemoveBtnCell;