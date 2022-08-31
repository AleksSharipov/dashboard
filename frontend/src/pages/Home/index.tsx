import React from 'react';

import style from './Home.module.scss';

import SideMenu from '../../components/SideMenu';
import Search from '../../components/Search';
import User from '../../components/User';

const Home: React.FC = () => {

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <SideMenu />
        <div className={style.content}>
          <div className={style.header}>
            <Search />
            <User />
          </div>
          <div className={style.dashboard}>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
            <div className={style.dashboard__price}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home; 