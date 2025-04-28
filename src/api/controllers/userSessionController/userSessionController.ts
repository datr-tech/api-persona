import { userSessionControllerCreateUserSession } from './userSessionControllerCreateUserSession';
import { userSessionControllerDeleteUserSession } from './userSessionControllerDeleteUserSession';
import { userSessionControllerReadUserSession } from './userSessionControllerReadUserSession';
import { userSessionControllerUpdateUserSession } from './userSessionControllerUpdateUserSession';

export const userSessionController = {
  createUserSession: userSessionControllerCreateUserSession,
  updateUserSession: userSessionControllerUpdateUserSession,
  readUserSession: userSessionControllerReadUserSession,
  deleteUserSession: userSessionControllerDeleteUserSession,
};
