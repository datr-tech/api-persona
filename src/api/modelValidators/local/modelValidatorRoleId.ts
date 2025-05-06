import { RoleModel } from '@app-ap/api/models/RoleModel';

export const modelValidatorRoleId = async (doc, next) => {
  let role;
  let roleId;

  if (doc && typeof doc.roleId !== 'undefined') {
    roleId = doc.roleId;
  }

  if (roleId) {
    role = await RoleModel.findById(roleId);
  }

  if (!role) {
    throw new Error('roleId: invalid');
  }

  next();
};
