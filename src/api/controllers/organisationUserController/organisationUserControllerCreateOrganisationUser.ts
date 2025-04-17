import { Types } from 'mongoose';
import { OrganisationUserModel } from '@app/api/models';

export const organisationUserControllerCreateOrganisationUser = async ({
  organisationId,
  userId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const organisationUserId = new Types.ObjectId();
  const modelParams = {
    organisationUserId,
    organisationId,
    userId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const organisationUserModel = new OrganisationUserModel(modelParams);
  await organisationUserModel.save();

  return organisationUserModel._id;
};
