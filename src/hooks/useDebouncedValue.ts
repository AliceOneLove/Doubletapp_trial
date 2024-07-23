import { useState, useEffect } from 'react';

const useDebouncedValue = (value: string | number, debounce: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce]);

  return debouncedValue;
};

export default useDebouncedValue;
