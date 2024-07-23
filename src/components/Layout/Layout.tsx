import React from 'react';
import Table from '../Table/Table';
import Header from '../Header/Header';
import styles from './Layout.module.css';
import CardsContainer from '../CardsContainer/CardsContainer';
import useDeviceType from '../../hooks/useDeviceType';

const Layout = () => {
  const isMobile = useDeviceType();

  return (
    <div className={styles.layout}>
      <Header nickname='AliceOneLove'/>
      <h1 className={styles.h1}>Студенты</h1>
      {!isMobile ? <Table/> : <CardsContainer/>}
    </div>
  );
}

export default Layout;
