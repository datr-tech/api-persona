import { UserSessionModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const userSessionControllerCreateUserSession = async ({
  userId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const userSessionId = new Types.ObjectId();
  const modelParams = {
    userSessionId,
    userId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const userSessionModel = new UserSessionModel(modelParams);
  await userSessionModel.save();

  return userSessionModel._id;
};
