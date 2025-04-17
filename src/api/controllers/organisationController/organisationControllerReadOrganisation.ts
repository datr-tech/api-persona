import { OrganisationModel } from '@app/api/models';

export const organisationControllerReadOrganisation = async ({ organisationId }) => {
  const organisation = await OrganisationModel.findById(organisationId);

  return organisation;
};
