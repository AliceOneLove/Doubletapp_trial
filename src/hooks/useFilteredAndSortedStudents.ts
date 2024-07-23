import { useMemo, useState } from 'react';
import { IStudent } from '../types/types';
import { MobileSorting } from '../types/types';


const useFilteredAndSortedStudents = (students: IStudent[]) => {
    const [filtering, setFiltering] = useState({
        searchTerm: '',
        sorting: { id: '', desc: false } as MobileSorting
    });

    const filteredAndSortedStudents = useMemo(() => {
        const { searchTerm, sorting } = filtering;
        return students
            .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .sort((a, b) => {
                if (sorting.id === '') return 0;
                const key = sorting.id as keyof IStudent;
                if (a[key] < b[key]) return sorting.desc ? 1 : -1;
                if (a[key] > b[key]) return sorting.desc ? -1 : 1;
                return 0;
            });
    }, [students, filtering]);

    const setSearchTerm = (value: string) => {
        setFiltering(prev => ({ ...prev, searchTerm: value }));
    };

    const setSorting = (sorting: MobileSorting) => {
        setFiltering(prev => ({ ...prev, sorting }));
    };

    return { filteredAndSortedStudents, setSearchTerm, setSorting, filtering };
};

export default useFilteredAndSortedStudents;
