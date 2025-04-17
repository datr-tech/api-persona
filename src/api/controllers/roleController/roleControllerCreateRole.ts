import { Types } from 'mongoose';
import { RoleModel } from '@app/api/models';

export const roleControllerCreateRole = async ({ description, name, adminStatusId, adminUserId }) => {
  const roleId = new Types.ObjectId();
  const modelParams = {
    roleId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const roleModel = new RoleModel(modelParams);
  await roleModel.save();

  return roleModel._id;
};
