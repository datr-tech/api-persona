import { UserModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const userControllerCreateUser = async ({
  userTypeId,
  username,
  password,
  adminStatusId,
  adminUserId,
}) => {
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
