import React from 'react';
import styles from './Loading.module.css';
import svg from '../assets/svg.svg';
const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        {' '}
        <img src={svg} alt="Logo" />
      </div>
    </div>
  );
};

export default Loading;
