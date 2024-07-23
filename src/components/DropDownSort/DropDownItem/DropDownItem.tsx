import React from 'react';
import styles from './DropDownItem.module.css';

type DropDownItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const DropDownItem = ({ label, isActive, onClick }: DropDownItemProps) => {
  return (
    <li className={isActive ? styles.currLi : styles.li}>
      <button
        className={isActive ? styles.currOptionBtn : styles.optionBtn}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

export default DropDownItem;