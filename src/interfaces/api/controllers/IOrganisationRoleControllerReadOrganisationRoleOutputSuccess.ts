import { IOrganisationRoleModel } from '@app-ap/interfaces/api/models';

export interface IOrganisationRoleControllerReadOrganisationRoleOutputSuccess {
  error: false;
  payload: {
    organisationRoleModel: IOrganisationRoleModel;
  };
}
