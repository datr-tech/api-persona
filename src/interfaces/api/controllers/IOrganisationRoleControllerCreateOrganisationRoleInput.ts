import { Types } from 'mongoose';

export interface IOrganisationRoleControllerCreateOrganisationRoleInput {
  organisationId: Types.ObjectId;
  roleId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
