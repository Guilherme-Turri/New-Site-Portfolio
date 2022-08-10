import React from 'react';
import styles from './FailFetch.module.css';
import img from '../../src/assets/try.svg';
const FailFetch = () => {
  return (
    <div className={styles.try}>
      <p>Tentando buscar dados na API</p>
      <div className={styles.tryImg}>
        <img src={img} alt="Tryng" />
      </div>
    </div>
  );
};

export default FailFetch;
