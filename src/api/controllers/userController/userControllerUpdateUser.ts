import { UserModel } from '@app-ap/api/models';

export const userControllerUpdateUser = async ({ userId, payload }) => {
  const res = await UserModel.findOneAndUpdate(
    {
      _id: userId,
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
