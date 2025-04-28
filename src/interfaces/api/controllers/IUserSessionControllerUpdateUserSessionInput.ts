import { Types } from 'mongoose';

export interface IUserSessionControllerUpdateUserSessionInput {
  userSessionId: Types.ObjectId;
  payload: {
    userId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
