import { Types } from 'mongoose';
import { OrganisationRoleModel } from '@app/api/models';

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
