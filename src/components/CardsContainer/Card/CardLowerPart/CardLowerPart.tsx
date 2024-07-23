import React from 'react';
import styles from './CardLowerPart.module.css';
import { IStudent } from '../../../../types/types';
import useAge from '../../../../hooks/useAge';

const CardLowerPart = ({ student }: { student: IStudent }) => {
  const ageStr = useAge(student.birthday);

  return (
    <ul className={styles.cardLowerPart}>
      <li className={styles.li}>{ageStr}</li>
      <li className={styles.li}>{student.specialty}</li>
      <li className={styles.li}>{student.group}</li>
    </ul>
  );
};

export default CardLowerPart;
