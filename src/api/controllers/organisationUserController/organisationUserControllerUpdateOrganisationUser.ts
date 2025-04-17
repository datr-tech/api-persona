import { OrganisationUserModel } from '@app/api/models';

export const organisationUserControllerUpdateOrganisationUser = async ({ organisationUserId, payload }) => {
  const res = await OrganisationUserModel.findOneAndUpdate(
    {
      _id: organisationUserId,
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
