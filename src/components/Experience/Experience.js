import React from 'react';
import { EXPERIENCE_GET } from '../../api';
import styles from './Experience.module.css';
import Jobs from './Jobs';
import useGetData from '../../hooks/useGetData';
import FailFetch from '../../helper/FailFetch';
const Experience = () => {
  const { url, options } = EXPERIENCE_GET();
  const { data, error, request } = useGetData();

  React.useEffect(() => {
    request(url, options);
    // eslint-disable-next-line
  }, []);
  if (error) return <FailFetch />;
  if (data)
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Experiência Profissional</h2>
        {data.map((item, index) => (
          <Jobs key={index} item={item} />
        ))}
      </div>
    );
};

export default Experience;
