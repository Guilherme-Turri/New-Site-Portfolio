import React from 'react';
import styles from './About.module.css';
import { CLASS_GET } from '../../api';
import Accordion from './Accordion';
import useGetData from '../../hooks/useGetData';
import FailFetch from '../../helper/FailFetch';
const About = () => {
  const { url, options } = CLASS_GET();
  const { data, error, request } = useGetData();

  React.useEffect(() => {
    request(url, options);
    // eslint-disable-next-line
  }, []);

  if (error) return <FailFetch />;
  if (data)
    return (
      <div className={styles.container}>
        <div>
          <h2 className={styles.titleAcademic}>Formação Academica</h2>
          <p>
            Ciência da Computação -UNIP <span>- Conclusão em 2016</span>
          </p>
        </div>
        <h2 className={styles.title}>Cursos</h2>
        {data
          .map((item, index) => (
            <div key={index}>
              <Accordion item={item} index={index} />
            </div>
          ))
          .reverse()}
      </div>
    );
  else return null;
};

export default About;
