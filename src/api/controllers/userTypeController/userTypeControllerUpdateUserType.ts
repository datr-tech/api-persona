import { UserTypeModel } from '@app/api/models';

export const userTypeControllerUpdateUserType = async ({ userTypeId, payload }) => {
  const res = await UserTypeModel.findOneAndUpdate(
    {
      _id: userTypeId,
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
