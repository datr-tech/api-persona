import { IUserSessionControllerCreateUserSessionOutputError } from './IUserSessionControllerCreateUserSessionOutputError';
import { IUserSessionControllerCreateUserSessionOutputSuccess } from './IUserSessionControllerCreateUserSessionOutputSuccess';

export type IUserSessionControllerCreateUserSessionOutput =
  | IUserSessionControllerCreateUserSessionOutputSuccess
  | IUserSessionControllerCreateUserSessionOutputError;
