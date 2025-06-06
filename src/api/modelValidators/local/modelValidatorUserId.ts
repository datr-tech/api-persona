import { UserModel } from '@app-ap/api/models/UserModel';

export const modelValidatorUserId = async (doc, next) => {
  let user;
  let userId;

  if (doc && typeof doc.userId !== 'undefined') {
    userId = doc.userId;
  }

  if (userId) {
    user = await UserModel.findById(userId);
  }

  if (!user) {
    throw new Error('userId: invalid');
  }

  next();
};
