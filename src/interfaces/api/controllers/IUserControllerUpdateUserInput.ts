import { Types } from 'mongoose';

export interface IUserControllerUpdateUserInput {
  userId: Types.ObjectId;
  payload: {
    userTypeId?: Types.ObjectId;

    username?: string;

    password?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
