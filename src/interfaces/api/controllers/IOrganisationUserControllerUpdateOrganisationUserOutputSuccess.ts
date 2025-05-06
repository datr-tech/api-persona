import { Types } from 'mongoose';

export interface IOrganisationUserControllerUpdateOrganisationUserOutputSuccess {
  error: false;
  payload: {
    organisationUserId: Types.ObjectId;
    responseStatusCode: number;
  };
}
