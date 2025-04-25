import { RoleModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const roleControllerDeleteRole = async ({ roleId }) => {
  const res = await RoleModel.findOneAndUpdate(
    {
      _id: roleId,
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
