import React from 'react';
import styles from './CardUpperPart.module.css';
import ratingIcon from '../../../../assets/rating.png';
import { CardProps } from '../Card';
import useAvatarStyle from '../../../../hooks/useAvatarStyle';

const CardUpperPart = ({ student, onDelete }: CardProps) => {
  const avatarStyle = useAvatarStyle(student.avatar);

  return (
    <div className={styles.cardUpperPart}>
      <div className={styles.avatarContainer}>
        <div style={avatarStyle} className={styles.avatar}></div>
      </div>
      <div className={styles.nameContainer}>
        <p className={styles.name}>{student.name}</p>
        <div className={styles.colorRatingContainer}>
          <div className={styles.color} style={{ backgroundColor: student.color }}></div>
          <img src={ratingIcon} className={styles.ratingImg} />
          <p className={styles.rating}>{student.rating}</p>
        </div>
      </div>
      <div className={styles.removeBtnContainer}>
        <button 
          className={styles.removeBtn}
          onClick={() => onDelete(student.id)}
        />
      </div>
    </div>
  );
};

export default CardUpperPart;
