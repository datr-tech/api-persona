import { IUserControllerUpdateUserOutputError } from './IUserControllerUpdateUserOutputError';
import { IUserControllerUpdateUserOutputSuccess } from './IUserControllerUpdateUserOutputSuccess';

export type IUserControllerUpdateUserOutput =
  | IUserControllerUpdateUserOutputSuccess
  | IUserControllerUpdateUserOutputError;
