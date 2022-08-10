import React from 'react';
import styles from './SeeMore.module.css';

const SeeMore = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href={'https://github.com/Guilherme-Turri?tab=repositories'}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.ball}> + </div>
        <div className={styles.allProjects}>
          <p>Click aqui para ver todos os meus projetos!</p>
        </div>
      </a>
    </div>
  );
};

export default SeeMore;
