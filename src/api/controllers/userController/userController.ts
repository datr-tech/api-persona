import { userControllerCreateUser } from './userControllerCreateUser';
import { userControllerDeleteUser } from './userControllerDeleteUser';
import { userControllerReadUser } from './userControllerReadUser';
import { userControllerUpdateUser } from './userControllerUpdateUser';

export const userController = {
  createUser: userControllerCreateUser,
  updateUser: userControllerUpdateUser,
  readUser: userControllerReadUser,
  deleteUser: userControllerDeleteUser,
};
