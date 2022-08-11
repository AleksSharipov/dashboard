import jwt from 'jsonwebtoken';

export default (request, response, next) => {

  const token = (request.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded = jwt.verify(token, 'secret');

      request.userId = decoded._id;

      next();
    } catch (error) {
      console.log(error)
      return response.status(403).json({
        message: 'Нет доступа',
      })
    }
  } else {
    return response.status(403).json({
      message: 'Нет доступа',
    })
  }

};