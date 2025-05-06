import { IOrganisationTypeModel } from '@app-ap/interfaces/api/models';

export interface IOrganisationTypeControllerReadOrganisationTypeOutputSuccess {
  error: false;
  payload: {
    organisationTypeModel: IOrganisationTypeModel;
    responseStatusCode: number;
  };
}
