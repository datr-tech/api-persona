import { OrganisationRoleModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const organisationRoleControllerCreateOrganisationRole = async ({
  organisationId,
  roleId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const organisationRoleId = new Types.ObjectId();
  const modelParams = {
    organisationRoleId,
    organisationId,
    roleId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const organisationRoleModel = new OrganisationRoleModel(modelParams);
  await organisationRoleModel.save();

  return organisationRoleModel._id;
};
