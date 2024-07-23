import React, { useState, useEffect } from 'react';
import styles from './DebouncedInput.module.css'
import useDeviceType from '../../hooks/useDeviceType';

const DebouncedInput = ({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
    }: {
        value: string | number
        onChange: (value: string | number) => void
        debounce?: number
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
        const [value, setValue] = useState(initialValue);
        const isMobile = useDeviceType();

        useEffect(() => {
          const timeout = setTimeout(() => {
            onChange(value)
          }, debounce)
      
          return () => clearTimeout(timeout)
        }, [value])
      
        return (
          <input {...props} className={isMobile ? styles.mobileInput : styles.input} value={value} onChange={e => setValue(e.target.value)} />
        )
}

export default DebouncedInput;