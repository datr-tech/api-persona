import { UserTypeModel } from '@app/api/models';

export const modelValidatorUserTypeId = async (doc, next) => {
  let userType;
  let userTypeId;

  if (doc && typeof doc.userTypeId !== 'undefined') {
    userTypeId = doc.userTypeId;
  }

  if (userTypeId) {
    userType = await UserTypeModel.findById(userTypeId);
  }

  if (!userType) {
    throw new Error('userTypeId: invalid');
  }

  next();
};
