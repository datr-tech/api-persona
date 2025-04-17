import { userTypeControllerCreateUserType } from './userTypeControllerCreateUserType';
import { userTypeControllerUpdateUserType } from './userTypeControllerUpdateUserType';
import { userTypeControllerReadUserType } from './userTypeControllerReadUserType';
import { userTypeControllerDeleteUserType } from './userTypeControllerDeleteUserType';

export const userTypeController = {
  createUserType: userTypeControllerCreateUserType,
  updateUserType: userTypeControllerUpdateUserType,
  readUserType: userTypeControllerReadUserType,
  deleteUserType: userTypeControllerDeleteUserType,
};
