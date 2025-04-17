import { Types } from 'mongoose';
import { UserSessionModel } from '@app/api/models';

export const userSessionControllerCreateUserSession = async ({ userId, description, name, adminStatusId, adminUserId }) => {
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
