import { Types } from 'mongoose';
import { UserModel } from '@app/api/models';

export const userControllerCreateUser = async ({ userTypeId, username, password, adminStatusId, adminUserId }) => {
  const userId = new Types.ObjectId();
  const modelParams = {
    userId,
    userTypeId,
    username,
    password,
    adminStatusId,
    adminUserId,
  };

  const userModel = new UserModel(modelParams);
  await userModel.save();

  return userModel._id;
};
