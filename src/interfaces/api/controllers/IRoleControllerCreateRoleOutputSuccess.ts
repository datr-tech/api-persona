import { Types } from 'mongoose';

export interface IRoleControllerCreateRoleOutputSuccess {
  error: false;
  payload: {
    roleId: Types.ObjectId;
  };
}
