import React from 'react';
import { USER_GET } from '../../api';
import useGetData from '../../hooks/useGetData';
import styles from './Home.module.css';
import svg from '../../assets/svg.svg';
import FailFetch from '../../helper/FailFetch';
import Loading from '../../helper/Loading';

const Home = () => {
  const { url, options } = USER_GET();
  const { data, error, request, loading } = useGetData();

  React.useEffect(() => {
    request(url, options);
    // eslint-disable-next-line
  }, []);
  if (loading) return <Loading />;
  if (error) return <FailFetch />;
  if (data)
    return (
      <div className={styles.container}>
        <header className={styles.user}>
          <p className={styles.greeting}>Oi! Meu nome é </p>
          <h1 className={styles.name}>{data[0].name}</h1>
          <p className={styles.greeting}>
            Sou <span className={styles.postion}>{data[0].position}</span>
          </p>
          <p className={styles.stack}>
            Stack:{' '}
            {data[0].stack.map((item, index) => (
              <span key={index}>{item} </span>
            ))}
          </p>
        </header>
        <aside>
          <div className={styles.img}>
            <img src={svg} alt="Logo" />
          </div>
        </aside>
      </div>
    );
  return null;
};

export default Home;
