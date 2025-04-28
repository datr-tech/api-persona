import { Types } from 'mongoose';

export interface IUserSessionControllerCreateUserSessionOutputSuccess {
  error: false;
  payload: {
    userSessionId: Types.ObjectId;
  };
}
