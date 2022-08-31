import React from 'react';

import style from './user.module.scss';
import userAvatar from '../../assets/user.png';

const User: React.FC = () => {
  return (
    <div className={style.user}>
      <img src={userAvatar} className={style.user__img} />
      <div className={style.user__info}>
        <span className={style.user__name}>User name</span>
        <span className={style.user__email}>andywarhol@mail.com</span>
      </div>
    </div>
  )
}

export default User