import { Types } from 'mongoose';

export interface IOrganisationTypeControllerUpdateOrganisationTypeOutputSuccess {
  error: false;
  payload: {
    organisationTypeId: Types.ObjectId;
    responseStatusCode: number;
  };
}
