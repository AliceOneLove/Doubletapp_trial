import { SortingState } from '@tanstack/react-table';
import React, { useState, useCallback } from 'react';
import styles from './DropDownSort.module.css';
import { MobileSorting } from '../../types/types';
import useDeviceType from '../../hooks/useDeviceType';
import DropDownItem from './DropDownItem/DropDownItem';
import useHandleSorting from '../../hooks/useHandleSorting';

type DropDownSortProps = {
  sorting: SortingState | MobileSorting;
  setSorting: React.Dispatch<React.SetStateAction<SortingState>> | React.Dispatch<React.SetStateAction<MobileSorting>>;
};

const DropDownSort = ({ sorting, setSorting }: DropDownSortProps) => {
  const [open, setOpen] = useState(false);
  const [currOption, setCurrOption] = useState('Отсортировать');
  const isMobile = useDeviceType();

  const { handleSorting } = useHandleSorting({ setSorting });

  const toggleOpen = () => setOpen((prev) => !prev);

  const sortingOptions = [
    { label: 'Имя А-Я', id: 'name', desc: false },
    { label: 'Имя Я-А', id: 'name', desc: true },
    { label: 'Сначала моложе', id: 'birthday', desc: true },
    { label: 'Сначала старше', id: 'birthday', desc: false },
    { label: 'Высокий рейтинг', id: 'rating', desc: true },
    { label: 'Низкий рейтинг', id: 'rating', desc: false }
  ];

  return (
    <div className={isMobile ? styles.mobDropDownContainer : styles.dropDownContainer}>
      <button className={isMobile ? styles.mobBtn : styles.btn} onClick={toggleOpen}>
        {isMobile ? null : currOption}
      </button>
      {open && (
        <ul className={isMobile ? styles.mobUl : styles.ul}>
          {sortingOptions.map((option) => (
            <DropDownItem
              key={option.label}
              label={option.label}
              isActive={currOption === option.label}
              onClick={() => {
                handleSorting({ id: option.id, desc: option.desc }, sorting);
                setCurrOption(option.label);
                toggleOpen();
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownSort;