import { UserTypeModel } from '@app-ap/api/models';

export const userTypeControllerReadUserType = async ({ userTypeId }) => {
  const userType = await UserTypeModel.findById(userTypeId);

  return userType;
};
