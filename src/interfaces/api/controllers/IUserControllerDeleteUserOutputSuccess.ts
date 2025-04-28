import { Types } from 'mongoose';

export interface IUserControllerDeleteUserOutputSuccess {
  error: false;
  payload: {
    userId: Types.ObjectId;
  };
}
