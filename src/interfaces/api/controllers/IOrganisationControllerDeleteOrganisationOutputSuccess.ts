import { Types } from 'mongoose';

export interface IOrganisationControllerDeleteOrganisationOutputSuccess {
  error: false;
  payload: {
    organisationId: Types.ObjectId;
    responseStatusCode: number;
  };
}
