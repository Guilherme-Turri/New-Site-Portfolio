import React from 'react';
import styles from './Button.module.css';
const Button = ({ link }) => {
  return (
    <a href={link.src} target="_blank" rel="noreferrer">
      <button className={styles.link}>{link.name}</button>
    </a>
  );
};

export default Button;
