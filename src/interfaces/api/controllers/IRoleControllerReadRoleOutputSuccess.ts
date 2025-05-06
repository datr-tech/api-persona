import { IRoleModel } from '@app-ap/interfaces/api/models';

export interface IRoleControllerReadRoleOutputSuccess {
  error: false;
  payload: {
    roleModel: IRoleModel;
    responseStatusCode: number;
  };
}
