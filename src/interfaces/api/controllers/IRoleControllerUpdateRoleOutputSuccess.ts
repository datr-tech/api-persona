import { Types } from 'mongoose';

export interface IRoleControllerUpdateRoleOutputSuccess {
  error: false;
  payload: {
    roleId: Types.ObjectId;
    responseStatusCode: number;
  };
}
