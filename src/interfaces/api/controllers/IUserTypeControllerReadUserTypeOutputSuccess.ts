import { IUserTypeModel } from '@app-ap/interfaces/api/models';

export interface IUserTypeControllerReadUserTypeOutputSuccess {
  error: false;
  payload: {
    userTypeModel: IUserTypeModel;
    responseStatusCode: number;
  };
}
