import { Types } from 'mongoose';
import { UserModel } from '@app/api/models';

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
