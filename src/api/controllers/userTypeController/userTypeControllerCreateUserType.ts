import { Types } from 'mongoose';
import { UserTypeModel } from '@app/api/models';

export const userTypeControllerCreateUserType = async ({ description, name, adminStatusId, adminUserId }) => {
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
