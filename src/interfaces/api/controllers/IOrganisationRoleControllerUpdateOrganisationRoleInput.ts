import { Types } from 'mongoose';

export interface IOrganisationRoleControllerUpdateOrganisationRoleInput {
  organisationRoleId: Types.ObjectId;
  payload: {
    organisationId?: Types.ObjectId;

    roleId?: Types.ObjectId;

    description?: string;

    name?: string;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
