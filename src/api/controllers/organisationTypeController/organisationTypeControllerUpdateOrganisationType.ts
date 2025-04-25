import { OrganisationTypeModel } from '@app-ap/api/models';

export const organisationTypeControllerUpdateOrganisationType = async ({
  organisationTypeId,
  payload,
}) => {
  const res = await OrganisationTypeModel.findOneAndUpdate(
    {
      _id: organisationTypeId,
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
