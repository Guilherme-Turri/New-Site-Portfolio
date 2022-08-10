import React from 'react';
import styles from './Accordion.module.css';
const Accordion = ({ item, index }) => {
  const [selected, setSelected] = React.useState(null);
  const toogleItem = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div>
      <div className={styles.accortionBox} onClick={() => toogleItem(index)}>
        <div className={styles.accordionTitle}>
          {item.class}
          <span>+</span>
        </div>
        <div
          className={
            selected === index ? styles.accordionDetails : styles.closeAccordion
          }
        >
          {' '}
          <p>
            {item.company} - Conclusão em{' '}
            <span>{item.completedAt.slice(0, 4)}</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
