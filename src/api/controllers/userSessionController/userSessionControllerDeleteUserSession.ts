import { UserSessionModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

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
