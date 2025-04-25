import { UserModel } from '@app-ap/api/models';

export const modelValidatorAdminUserId = async (doc, next) => {
  let adminUserId;
  let user;

  if (doc && typeof doc.adminUserId !== 'undefined') {
    adminUserId = doc.adminUserId;
  }

  if (adminUserId) {
    user = await UserModel.findById(adminUserId);
  }

  if (!user) {
    throw new Error('adminUserId: invalid');
  }

  next();
};
