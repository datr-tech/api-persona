import { roleControllerCreateRole } from './roleControllerCreateRole';
import { roleControllerDeleteRole } from './roleControllerDeleteRole';
import { roleControllerReadRole } from './roleControllerReadRole';
import { roleControllerUpdateRole } from './roleControllerUpdateRole';

export const roleController = {
  createRole: roleControllerCreateRole,
  updateRole: roleControllerUpdateRole,
  readRole: roleControllerReadRole,
  deleteRole: roleControllerDeleteRole,
};
