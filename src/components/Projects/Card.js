import React from 'react';
import Button from './Button';
import styles from './Card.module.css';
import svg2 from '../../assets/svg2.svg';

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img className={styles.cardImg} src={svg2} alt="Logo" />
      </div>
      <h4 className={styles.projectTitle}>{data.name}</h4>
      <div className={styles.projectDescription}>
        {data.description}
        <div className={styles.buttonWrapper}>
          {data.links.map((link, index) => (
            <Button link={link} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
