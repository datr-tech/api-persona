import { OrganisationRoleModel } from '@app-ap/api/models';

export const organisationRoleControllerReadOrganisationRole = async ({
  organisationRoleId,
}) => {
  const organisationRole = await OrganisationRoleModel.findById(organisationRoleId);

  return organisationRole;
};
