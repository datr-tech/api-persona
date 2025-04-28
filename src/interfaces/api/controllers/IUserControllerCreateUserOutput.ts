import { IUserControllerCreateUserOutputError } from './IUserControllerCreateUserOutputError';
import { IUserControllerCreateUserOutputSuccess } from './IUserControllerCreateUserOutputSuccess';

export type IUserControllerCreateUserOutput =
  | IUserControllerCreateUserOutputSuccess
  | IUserControllerCreateUserOutputError;
