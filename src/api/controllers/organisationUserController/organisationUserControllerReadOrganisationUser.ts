import { OrganisationUserModel } from '@app-ap/api/models';

export const organisationUserControllerReadOrganisationUser = async ({
  organisationUserId,
}) => {
  const organisationUser = await OrganisationUserModel.findById(organisationUserId);

  return organisationUser;
};
