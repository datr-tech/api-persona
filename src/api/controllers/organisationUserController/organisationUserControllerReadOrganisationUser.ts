import { OrganisationUserModel } from '@app/api/models';

export const organisationUserControllerReadOrganisationUser = async ({ organisationUserId }) => {
  const organisationUser = await OrganisationUserModel.findById(organisationUserId);

  return organisationUser;
};
