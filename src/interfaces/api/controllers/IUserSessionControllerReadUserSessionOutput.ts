import { IUserSessionControllerReadUserSessionOutputError } from './IUserSessionControllerReadUserSessionOutputError';
import { IUserSessionControllerReadUserSessionOutputSuccess } from './IUserSessionControllerReadUserSessionOutputSuccess';

export type IUserSessionControllerReadUserSessionOutput =
  | IUserSessionControllerReadUserSessionOutputSuccess
  | IUserSessionControllerReadUserSessionOutputError;
