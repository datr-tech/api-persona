import { Types } from 'mongoose';

export interface IOrganisationUserControllerDeleteOrganisationUserOutputSuccess {
  error: false;
  payload: {
    organisationUserId: Types.ObjectId;
    responseStatusCode: number;
  };
}
