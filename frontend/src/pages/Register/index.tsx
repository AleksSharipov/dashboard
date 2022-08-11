import React from 'react';

import style from './Register.module.scss'

const Register: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.login}>
        <h2>Create Account</h2>
        <form>
          <div className={style.fieldset} >
            <label htmlFor="contact">
              First name
            </label>
            <input type="text" />
          </div>
          <div className={style.fieldset}>
            <label htmlFor="contact">
              Last name
            </label>
            <input type="text" />
          </div>
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
          <button>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Register;