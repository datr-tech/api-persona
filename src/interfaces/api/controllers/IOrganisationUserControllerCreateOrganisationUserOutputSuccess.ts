import { Types } from 'mongoose';

export interface IOrganisationUserControllerCreateOrganisationUserOutputSuccess {
  error: false;
  payload: {
    organisationUserId: Types.ObjectId;
  };
}
