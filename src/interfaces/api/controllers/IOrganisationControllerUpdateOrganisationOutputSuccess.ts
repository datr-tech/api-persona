import { Types } from 'mongoose';

export interface IOrganisationControllerUpdateOrganisationOutputSuccess {
  error: false;
  payload: {
    organisationId: Types.ObjectId;
    responseStatusCode: number;
  };
}
