import { Types } from 'mongoose';

export interface IUserTypeControllerCreateUserTypeOutputSuccess {
  error: false;
  payload: {
    userTypeId: Types.ObjectId;
  };
}
