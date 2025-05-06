import { IUserModel } from '@app-ap/interfaces/api/models';

export interface IUserControllerReadUserOutputSuccess {
  error: false;
  payload: {
    userModel: IUserModel;
    responseStatusCode: number;
  };
}
