import { useCallback } from 'react';
import { SortingState } from '@tanstack/react-table';
import { MobileSorting } from '../types/types';

type UseHandleSortingProps = {
  setSorting: React.Dispatch<React.SetStateAction<SortingState>> | React.Dispatch<React.SetStateAction<MobileSorting>>;
};

const useHandleSorting = ({ setSorting }: UseHandleSortingProps) => {
  const handleSorting = useCallback(
    (sortingTerm: MobileSorting, sorting: SortingState | MobileSorting) => {
      if (Array.isArray(sorting)) {
        (setSorting as React.Dispatch<React.SetStateAction<SortingState>>)([sortingTerm]);
      } else {
        (setSorting as React.Dispatch<React.SetStateAction<MobileSorting>>)(sortingTerm);
      }
    },
    [setSorting]
  );

  return { handleSorting };
};

export default useHandleSorting;