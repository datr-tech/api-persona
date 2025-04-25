import { UserModel } from '@app-ap/api/models';

export const userControllerReadUser = async ({ userId }) => {
  const user = await UserModel.findById(userId);

  return user;
};
