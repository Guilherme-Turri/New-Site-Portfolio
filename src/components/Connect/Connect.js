import React from 'react';
import { USER_GET } from '../../api';
import useGetData from '../../hooks/useGetData';
import styles from './Connect.module.css';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import FailFetch from '../../helper/FailFetch';
import Mail from './Mail';

const Connect = () => {
  const { url, options } = USER_GET();
  const { data, error, request } = useGetData();
  React.useEffect(() => {
    request(url, options);
    // eslint-disable-next-line
  }, []);

  if (error) return <FailFetch />;
  if (data)
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Vamos conversar!</h2>
        <div className={styles.wrapper}>
          <section className={styles.info}>
            <p>Para mais informações, entre em contato comigo!</p>
            <div className={styles.links}>
              <div className={styles.github}>
                <a
                  href="https://github.com/Guilherme-Turri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="GitHub logo" />
                </a>{' '}
              </div>
              <div className={styles.linkedin}>
                {' '}
                <a
                  href="https://www.linkedin.com/in/guilhermetgiovanni/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin logo" />
                </a>{' '}
              </div>
            </div>
            <div className={styles.data}>
              {' '}
              <p>{data[0].email}</p>
              <p>+{data[0].phoneNumber}</p>
            </div>
          </section>
          <section className={styles.email}>
            {' '}
            <Mail />
          </section>
        </div>
      </div>
    );
};

export default Connect;
