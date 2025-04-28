import { Types } from 'mongoose';

export interface IRoleControllerDeleteRoleOutputSuccess {
  error: false;
  payload: {
    roleId: Types.ObjectId;
  };
}
