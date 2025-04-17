import { userSessionControllerCreateUserSession } from './userSessionControllerCreateUserSession';
import { userSessionControllerUpdateUserSession } from './userSessionControllerUpdateUserSession';
import { userSessionControllerReadUserSession } from './userSessionControllerReadUserSession';
import { userSessionControllerDeleteUserSession } from './userSessionControllerDeleteUserSession';

export const userSessionController = {
  createUserSession: userSessionControllerCreateUserSession,
  updateUserSession: userSessionControllerUpdateUserSession,
  readUserSession: userSessionControllerReadUserSession,
  deleteUserSession: userSessionControllerDeleteUserSession,
};
