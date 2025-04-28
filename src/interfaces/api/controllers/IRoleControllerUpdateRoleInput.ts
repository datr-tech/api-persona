import { Types } from 'mongoose';

export interface IRoleControllerUpdateRoleInput {
  roleId: Types.ObjectId;
  payload: {
    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
