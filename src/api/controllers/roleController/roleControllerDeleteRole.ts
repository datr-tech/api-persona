import { Types } from 'mongoose';
import { RoleModel } from '@app/api/models';

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
