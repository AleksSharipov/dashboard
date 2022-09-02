import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import { useSelector } from 'react-redux';

import style from './Login.module.scss';

// type AuthType = {

// }

const Login: React.FC = () => {

  const isAuth = useSelector(selectIsAuth);

  console.log(isAuth)

  const dispatch = useAppDispatch();

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = (values: any) => {
    dispatch(fetchAuth(values))
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  // добавить обработку ошибок
  return (
    <div className={style.container}>
      <div className={style.login}>
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.fieldset}>
            <label htmlFor="contact">
              Your email address
            </label>
            <input type="email" {...register('email', { required: 'Укажите почту' })} />
          </div>
          <div className={style.fieldset}>
            <label htmlFor="contact">
              Password
            </label>
            <input type="password" {...register('password', { required: 'Укажите пароль' })} />
          </div>
          <button>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Login;