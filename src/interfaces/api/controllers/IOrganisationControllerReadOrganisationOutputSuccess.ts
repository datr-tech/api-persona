import { IOrganisationModel } from '@app-ap/interfaces/api/models';

export interface IOrganisationControllerReadOrganisationOutputSuccess {
  error: false;
  payload: {
    organisationModel: IOrganisationModel;
    responseStatusCode: number;
  };
}
