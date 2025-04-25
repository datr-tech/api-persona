import { Types } from 'mongoose';

export interface IUserModel {
  userId: Types.ObjectId;
  userTypeId: Types.ObjectId;
  username: string;
  password: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
