import { Types } from 'mongoose';

export interface IOrganisationControllerUpdateOrganisationInput {
  organisationId: Types.ObjectId;
  payload: {
    frameworkId?: Types.ObjectId;

    organisationTypeId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
