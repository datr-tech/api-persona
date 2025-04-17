import { Types } from 'mongoose';

export interface IOrganisationRoleModel {
  organisationRoleId: Types.ObjectId;
  organisationId: Types.ObjectId;
  roleId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
