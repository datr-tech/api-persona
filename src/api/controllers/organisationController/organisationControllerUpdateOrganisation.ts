import { OrganisationModel } from '@app-ap/api/models';

export const organisationControllerUpdateOrganisation = async ({
  organisationId,
  payload,
}) => {
  const res = await OrganisationModel.findOneAndUpdate(
    {
      _id: organisationId,
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
