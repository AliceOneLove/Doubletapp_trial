import React from 'react';
import { IStudent } from '../../../types/types';
import styles from './Card.module.css';
import CardUpperPart from './CardUpperPart/CardUpperPart';
import CardLowerPart from './CardLowerPart/CardLowerPart';

export type CardProps = {
    student: IStudent;
    onDelete: (id: number) => void;
};

const Card = ({ student, onDelete }: CardProps) => {
    return (
        <div key={student.id} className={styles.card}>
            <CardUpperPart student={student} onDelete={onDelete} />
            <CardLowerPart student={student} />
        </div>
    )
}

export default Card;