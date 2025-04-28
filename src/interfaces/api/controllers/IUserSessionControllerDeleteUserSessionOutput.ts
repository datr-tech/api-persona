import { IUserSessionControllerDeleteUserSessionOutputError } from './IUserSessionControllerDeleteUserSessionOutputError';
import { IUserSessionControllerDeleteUserSessionOutputSuccess } from './IUserSessionControllerDeleteUserSessionOutputSuccess';

export type IUserSessionControllerDeleteUserSessionOutput =
  | IUserSessionControllerDeleteUserSessionOutputSuccess
  | IUserSessionControllerDeleteUserSessionOutputError;
