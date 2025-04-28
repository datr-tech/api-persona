import { IUserControllerReadUserOutputError } from './IUserControllerReadUserOutputError';
import { IUserControllerReadUserOutputSuccess } from './IUserControllerReadUserOutputSuccess';

export type IUserControllerReadUserOutput =
  | IUserControllerReadUserOutputSuccess
  | IUserControllerReadUserOutputError;
