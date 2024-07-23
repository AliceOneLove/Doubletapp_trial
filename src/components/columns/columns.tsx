import React from "react";
import { IStudent } from "../../types/types";
import { createColumnHelper, CellContext } from "@tanstack/react-table";
import RemoveBtnCell from "../Table/RemoveBtnCell/RemoveBtnCell";
import styles from './columns.module.css';

const columnHelper = createColumnHelper<IStudent>();

export const COLUMNS = [
    columnHelper.accessor('avatar', {
        id: 'avatar',
        cell: info => {
            const avatar = info.getValue();
            return <div style={{
                    backgroundImage: `url(${avatar})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }} className={styles.avatar}>
            </div>
        },
        header: ' ',
        enableSorting: false,
    }),
    columnHelper.accessor('name', {
        id: 'name',
        cell: info => info.getValue(),
        header: 'ФИО',
        filterFn: 'includesString',
        sortingFn: 'alphanumeric',
    }),
    columnHelper.accessor('specialty', {
        id: 'specialty',
        cell: info => info.getValue(),
        header: 'Специальность',
        enableSorting: false,
    }),
    columnHelper.accessor('group', {
        id: 'group',
        cell: info => info.getValue(),
        header: 'Группа',
        enableSorting: false,
    }),
    columnHelper.accessor('birthday', {
        id: 'birthday',
        cell: info => {
            const currYear = new Date().getFullYear();
            const birthYear = +info.getValue().slice(0, 4);
            return `${currYear - birthYear}`;
        },
        header: 'Возраст',
        sortingFn: 'basic',
    }),
    columnHelper.accessor('rating', {
        id: 'rating',
        cell: info => info.getValue(),
        header: 'Рейтинг',
        sortingFn: 'basic',
    }),
    columnHelper.accessor('color', {
        id: 'color',
        cell: info => <div className={styles.color} style={{backgroundColor: info.getValue()}}></div>,
        header: '',
        // enableSorting: false,
    }),
    columnHelper.display({
        id: 'remove',
        cell: (props: CellContext<IStudent, unknown>) => <RemoveBtnCell {...props} />,
    })
];