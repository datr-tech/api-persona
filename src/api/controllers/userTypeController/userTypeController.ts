import { userTypeControllerCreateUserType } from './userTypeControllerCreateUserType';
import { userTypeControllerDeleteUserType } from './userTypeControllerDeleteUserType';
import { userTypeControllerReadUserType } from './userTypeControllerReadUserType';
import { userTypeControllerUpdateUserType } from './userTypeControllerUpdateUserType';

export const userTypeController = {
  createUserType: userTypeControllerCreateUserType,
  updateUserType: userTypeControllerUpdateUserType,
  readUserType: userTypeControllerReadUserType,
  deleteUserType: userTypeControllerDeleteUserType,
};
