import { UserSessionModel } from '@app/api/models';

export const userSessionControllerUpdateUserSession = async ({ userSessionId, payload }) => {
  const res = await UserSessionModel.findOneAndUpdate(
    {
      _id: userSessionId,
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
