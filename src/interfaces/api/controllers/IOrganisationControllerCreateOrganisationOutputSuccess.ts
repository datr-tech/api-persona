import { Types } from 'mongoose';

export interface IOrganisationControllerCreateOrganisationOutputSuccess {
  error: false;
  payload: {
    organisationId: Types.ObjectId;
    responseStatusCode: number;
  };
}
