import { IUserSessionControllerUpdateUserSessionOutputError } from './IUserSessionControllerUpdateUserSessionOutputError';
import { IUserSessionControllerUpdateUserSessionOutputSuccess } from './IUserSessionControllerUpdateUserSessionOutputSuccess';

export type IUserSessionControllerUpdateUserSessionOutput =
  | IUserSessionControllerUpdateUserSessionOutputSuccess
  | IUserSessionControllerUpdateUserSessionOutputError;
