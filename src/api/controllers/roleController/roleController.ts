import { roleControllerCreateRole } from './roleControllerCreateRole';
import { roleControllerUpdateRole } from './roleControllerUpdateRole';
import { roleControllerReadRole } from './roleControllerReadRole';
import { roleControllerDeleteRole } from './roleControllerDeleteRole';

export const roleController = {
  createRole: roleControllerCreateRole,
  updateRole: roleControllerUpdateRole,
  readRole: roleControllerReadRole,
  deleteRole: roleControllerDeleteRole,
};
