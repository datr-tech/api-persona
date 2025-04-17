import { Types } from 'mongoose';

export interface IOrganisationModel {
  organisationId: Types.ObjectId;
  frameworkId: Types.ObjectId;
  organisationTypeId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
