import { RoleModel } from '@app/api/models';

export const roleControllerReadRole = async ({ roleId }) => {
  const role = await RoleModel.findById(roleId);

  return role;
};
