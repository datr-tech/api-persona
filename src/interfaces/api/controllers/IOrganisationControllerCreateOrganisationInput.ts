import { Types } from 'mongoose';

export interface IOrganisationControllerCreateOrganisationInput {
  frameworkId: Types.ObjectId;
  organisationTypeId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
