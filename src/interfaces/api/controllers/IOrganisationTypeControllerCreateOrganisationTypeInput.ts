import { Types } from 'mongoose';

export interface IOrganisationTypeControllerCreateOrganisationTypeInput {
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
