import { userControllerCreateUser } from './userControllerCreateUser';
import { userControllerUpdateUser } from './userControllerUpdateUser';
import { userControllerReadUser } from './userControllerReadUser';
import { userControllerDeleteUser } from './userControllerDeleteUser';

export const userController = {
  createUser: userControllerCreateUser,
  updateUser: userControllerUpdateUser,
  readUser: userControllerReadUser,
  deleteUser: userControllerDeleteUser,
};
