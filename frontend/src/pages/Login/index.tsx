import React from 'react';

import style from './Login.module.scss'

const Login: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.login}>
        <h2>Sign in</h2>
        <form>
          <div className={style.fieldset}>
            <label htmlFor="contact">
              Your email address
            </label>
            <input type="email" />
          </div>
          <div className={style.fieldset}>
            <label htmlFor="contact">
              Password
            </label>
            <input type="password" />
          </div>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Login;