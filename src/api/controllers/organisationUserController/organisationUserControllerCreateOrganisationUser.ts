import { OrganisationUserModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

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
