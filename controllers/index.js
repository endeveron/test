import { HttpError } from '../utils/index.js';

export const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export const notFoundController = (req, res, next) => {
  return next(new HttpError('Requested url is not found', 404));
};
