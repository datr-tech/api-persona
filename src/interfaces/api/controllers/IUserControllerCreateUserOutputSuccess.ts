import { Types } from 'mongoose';

export interface IUserControllerCreateUserOutputSuccess {
  error: false;
  payload: {
    userId: Types.ObjectId;
    responseStatusCode: number;
  };
}
