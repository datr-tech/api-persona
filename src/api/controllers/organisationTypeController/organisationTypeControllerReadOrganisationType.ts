import { OrganisationTypeModel } from '@app-ap/api/models';

export const organisationTypeControllerReadOrganisationType = async ({
  organisationTypeId,
}) => {
  const organisationType = await OrganisationTypeModel.findById(organisationTypeId);

  return organisationType;
};
