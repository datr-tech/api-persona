import { IUserControllerDeleteUserOutputError } from './IUserControllerDeleteUserOutputError';
import { IUserControllerDeleteUserOutputSuccess } from './IUserControllerDeleteUserOutputSuccess';

export type IUserControllerDeleteUserOutput =
  | IUserControllerDeleteUserOutputSuccess
  | IUserControllerDeleteUserOutputError;
