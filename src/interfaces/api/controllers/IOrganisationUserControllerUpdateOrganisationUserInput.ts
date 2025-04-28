import { Types } from 'mongoose';

export interface IOrganisationUserControllerUpdateOrganisationUserInput {
  organisationUserId: Types.ObjectId;
  payload: {
    organisationId?: Types.ObjectId;

    userId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
