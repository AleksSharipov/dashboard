import { body } from 'express-validator';

export const registerValidaion = [
  body('firstName', 'Укажите имя').isLength({ min: 1 }),
  body('lastName', 'Укажите фамилию').isLength({ min: 1 }),
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
]