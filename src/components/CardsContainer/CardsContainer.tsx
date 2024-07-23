import React from 'react';
import styles from './CardsContainer.module.css'; 
import Card from './Card/Card';
import DebouncedInput from '../DebouncedInput/DebouncedInput';
import DropDownSort from '../DropDownSort/DropDownSort';
import useStudents from '../../hooks/useStudents';
import useFilteredAndSortedStudents from '../../hooks/useFilteredAndSortedStudents';

const CardsContainer = () => {
    const { data: students, setData: setStudents } = useStudents();
    const { 
        filteredAndSortedStudents, 
        setSearchTerm, 
        setSorting, 
        filtering 
    } = useFilteredAndSortedStudents(students);

    const handleDeleteCard = (id: number) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <>
            <div className={styles.filterSortContainer}>
                <DebouncedInput 
                    value={filtering.searchTerm} 
                    onChange={setSearchTerm}
                    placeholder='Поиск по имени'
                />
                <DropDownSort sorting={filtering.sorting} setSorting={setSorting}/>
            </div>
            <div className={styles.cardsContainer}>
                {filteredAndSortedStudents.map(student => (
                    <Card key={student.id} student={student} onDelete={handleDeleteCard}/>
                ))}
            </div>
        </>
    )
}

export default CardsContainer;