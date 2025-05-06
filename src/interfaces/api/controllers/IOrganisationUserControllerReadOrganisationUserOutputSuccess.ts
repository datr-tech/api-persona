import { IOrganisationUserModel } from '@app-ap/interfaces/api/models';

export interface IOrganisationUserControllerReadOrganisationUserOutputSuccess {
  error: false;
  payload: {
    organisationUserModel: IOrganisationUserModel;
    responseStatusCode: number;
  };
}
