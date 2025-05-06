import { Types } from 'mongoose';

export interface IUserTypeControllerUpdateUserTypeOutputSuccess {
  error: false;
  payload: {
    userTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
