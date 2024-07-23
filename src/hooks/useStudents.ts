import { useEffect, useState } from 'react';
import { IStudent } from '../types/types';

const useStudents = () => {
  const [data, setData] = useState<IStudent[]>([]);

  useEffect(() => {
    fetch('https://front-assignment-api.2tapp.cc/api/persons')
      .then(response => response.json())
      .then(data => setData(data.students))
      .catch(error => console.error(error));
  }, []);

  return { data, setData };
};

export default useStudents;
