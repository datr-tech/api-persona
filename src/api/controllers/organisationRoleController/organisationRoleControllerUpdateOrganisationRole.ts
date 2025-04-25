import { OrganisationRoleModel } from '@app-ap/api/models';

export const organisationRoleControllerUpdateOrganisationRole = async ({
  organisationRoleId,
  payload,
}) => {
  const res = await OrganisationRoleModel.findOneAndUpdate(
    {
      _id: organisationRoleId,
    },
    payload,
    {
      includeResultMetadata: true,
    },
  );

  let existingDocUpdated;

  if (
    typeof res !== 'undefined' &&
    typeof res.lastErrorObject !== 'undefined' &&
    typeof res.lastErrorObject.updatedExisting !== 'undefined'
  ) {
    existingDocUpdated = res.lastErrorObject.updatedExisting === false;
  }

  return existingDocUpdated;
};
