import { IUserSessionModel } from '@app-ap/interfaces/api/models';

export interface IUserSessionControllerReadUserSessionOutputSuccess {
  error: false;
  payload: {
    userSessionModel: IUserSessionModel;
    responseStatusCode: number;
  };
}
