import { OrganisationRoleModel } from '@app/api/models';

export const organisationRoleControllerReadOrganisationRole = async ({ organisationRoleId }) => {
  const organisationRole = await OrganisationRoleModel.findById(organisationRoleId);

  return organisationRole;
};
