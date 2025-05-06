import { Types } from 'mongoose';

export interface IUserControllerUpdateUserOutputSuccess {
  error: false;
  payload: {
    userId: Types.ObjectId;
    responseStatusCode: number;
  };
}
