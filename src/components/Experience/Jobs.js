import React from 'react';
import styles from './Jobs.module.css';

const Jobs = ({ item }) => {
  const formatString = (string) => {
    let day = string.slice(8, 10);
    let month = string.slice(4, 8);
    let year = string.slice(0, 4);
    const finalDate = `${day}${month}${year}`.replace(/-/g, '/');
    return finalDate;
  };

  return (
    <div className={styles.container}>
      <p className={styles.company}>{item.company}</p>
      <p className={styles.role}>
        {' '}
        {item.role} -
        <span className={styles.period}>
          <span> {formatString(item.initialDate)}</span>{' '}
          {item.finalDate ? (
            <span> até {formatString(item.finalDate)}</span>
          ) : (
            <span> - Emprego atual</span>
          )}
        </span>
      </p>
    </div>
  );
};

export default Jobs;
