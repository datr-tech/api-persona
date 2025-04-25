import { UserTypeModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const userTypeControllerDeleteUserType = async ({ userTypeId }) => {
  const res = await UserTypeModel.findOneAndUpdate(
    {
      _id: userTypeId,
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
