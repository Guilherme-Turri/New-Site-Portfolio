import React from 'react';
import { PROJECTS_GET } from '../../api';
import Card from './Card';
import styles from './Projects.module.css';
import SeeMore from './SeeMore';
import useGetData from '../../hooks/useGetData';
import FailFetch from '../../helper/FailFetch';
const Projects = () => {
  const { url, options } = PROJECTS_GET();
  const { data, error, request } = useGetData();

  React.useEffect(() => {
    request(url, options);
    // eslint-disable-next-line
  }, []);

  if (error) return <FailFetch />;
  if (data)
    return (
      <div className={styles.container}>
        <h2 className={styles.title}> Projetos</h2>
        <div className={styles.wrapper}>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}{' '}
          <div className={styles.seeMore}>
            <SeeMore />
          </div>
        </div>
      </div>
    );
};

export default Projects;
