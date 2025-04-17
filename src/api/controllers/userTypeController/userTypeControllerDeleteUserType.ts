import { Types } from 'mongoose';
import { UserTypeModel } from '@app/api/models';

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
