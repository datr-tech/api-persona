import { Types } from 'mongoose';

export interface IUserSessionModel {
  userSessionId: Types.ObjectId;
  userId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
