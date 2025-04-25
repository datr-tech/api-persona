import { UserModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const userControllerDeleteUser = async ({ userId }) => {
  const res = await UserModel.findOneAndUpdate(
    {
      _id: userId,
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
