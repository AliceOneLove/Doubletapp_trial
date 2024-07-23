import { useMemo } from 'react';

const useAge = (birthday: string) => {
  const age = useMemo(() => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }, [birthday]);

  const ageToStr = useMemo(() => {
    let txt: string;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      txt = 'лет';
    } else {
      count = count % 10;
      if (count === 1) {
        txt = 'год';
      } else if (count >= 2 && count <= 4) {
        txt = 'года';
      } else {
        txt = 'лет';
      }
    }
    return age + ' ' + txt;
  }, [age]);

  return ageToStr;
};

export default useAge;
