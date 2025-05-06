import { Types } from 'mongoose';

export interface IUserControllerCreateUserInput {
  userTypeId: Types.ObjectId;
  username: string;
  password: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
