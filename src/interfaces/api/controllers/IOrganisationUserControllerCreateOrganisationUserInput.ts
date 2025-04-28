import { Types } from 'mongoose';

export interface IOrganisationUserControllerCreateOrganisationUserInput {
  organisationId: Types.ObjectId;
  userId: Types.ObjectId;
  description: string | undefined;
  name: string;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt: number;
}
