import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { registerValidaion } from './validations/auth.js';

import checkAuth from './middleware/checkAuth.js';

import * as UserController from './controllers/UserController.js';

import { mongoApi } from './utils/mongo.js';

mongoose
  .connect(mongoApi)
  .then(() => console.log('connect DB'))
  .catch((err) => console.log(`DB error: ${err}`))

const app = express();
app.use(cors());

app.use(express.json());

app.post('/auth/login', UserController.login)
app.post('/auth/register', registerValidaion, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe);

app.listen('3333', (error) => {
  if (error) {
    return console.log(error)
  }

  console.log('Server start')
})