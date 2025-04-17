import { Types } from 'mongoose';
import { UserSessionModel } from '@app/api/models';

export const userSessionControllerDeleteUserSession = async ({ userSessionId }) => {
  const res = await UserSessionModel.findOneAndUpdate(
    {
      _id: userSessionId,
    },
    {
      adminStatusId: new Types.ObjectId(),
    },
    {
      includeResultMetadata: true,
    },
  );

  return res;
};
