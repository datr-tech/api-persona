import { Types } from 'mongoose';

export interface IOrganisationRoleControllerUpdateOrganisationRoleOutputSuccess {
  error: false;
  payload: {
    organisationRoleId: Types.ObjectId;
    responseStatusCode: number;
  };
}
