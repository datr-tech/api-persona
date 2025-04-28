import { Types } from 'mongoose';

export interface IUserTypeControllerDeleteUserTypeOutputSuccess {
  error: false;
  payload: {
    userTypeId: Types.ObjectId;
  };
}
