import { Types } from 'mongoose';

export interface IUserSessionControllerDeleteUserSessionOutputSuccess {
  error: false;
  payload: {
    userSessionId: Types.ObjectId;
    responseStatusCode: number;
  };
}
