import { Types } from 'mongoose';

export interface IUserSessionControllerUpdateUserSessionOutputSuccess {
  error: false;
  payload: {
    userSessionId: Types.ObjectId;
  };
}
