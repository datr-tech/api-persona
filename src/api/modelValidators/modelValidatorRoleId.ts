import { RoleModel } from '@app/api/models';

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
