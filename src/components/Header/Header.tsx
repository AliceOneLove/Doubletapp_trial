import React from 'react';
import mainLogo from '../../assets/headerLogo.png';
import styles from './Header.module.css';
import useDeviceType from '../../hooks/useDeviceType';

type HeaderProps = {
  nickname?: string;
}

const Header = ({ nickname }: HeaderProps) => {
  const isMobile = useDeviceType();

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={mainLogo} alt="Main Logo" />
      <p className={styles.p}>
        STUDENTS 
        {!isMobile && nickname && (
          <> by <span className={styles.nickname}>{nickname}</span></>
        )}
      </p>
    </header>
  );
}

export default Header;
