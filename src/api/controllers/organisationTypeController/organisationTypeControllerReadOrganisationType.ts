import { OrganisationTypeModel } from '@app/api/models';

export const organisationTypeControllerReadOrganisationType = async ({ organisationTypeId }) => {
  const organisationType = await OrganisationTypeModel.findById(organisationTypeId);

  return organisationType;
};
