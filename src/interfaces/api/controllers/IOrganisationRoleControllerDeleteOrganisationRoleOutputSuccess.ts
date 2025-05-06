import { Types } from 'mongoose';

export interface IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess {
  error: false;
  payload: {
    organisationRoleId: Types.ObjectId;
    responseStatusCode: number;
  };
}
