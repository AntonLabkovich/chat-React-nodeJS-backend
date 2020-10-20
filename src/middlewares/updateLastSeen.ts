import express from 'express';
import { UserModel } from '../models';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req: express.Request, _: express.Response, next: express.NextFunction) => {
  if (req.user) {
    UserModel.findOneAndUpdate(
      { _id: req.user._id },
      {
        last_seen: new Date(),
      },
      { new: true },
    );
  }
  next();
};
