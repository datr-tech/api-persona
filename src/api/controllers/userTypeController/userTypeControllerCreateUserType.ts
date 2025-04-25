import { UserTypeModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const userTypeControllerCreateUserType = async ({
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const userTypeId = new Types.ObjectId();
  const modelParams = {
    userTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const userTypeModel = new UserTypeModel(modelParams);
  await userTypeModel.save();

  return userTypeModel._id;
};
