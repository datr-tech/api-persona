import { IUserTypeControllerCreateUserTypeOutputError } from './IUserTypeControllerCreateUserTypeOutputError';
import { IUserTypeControllerCreateUserTypeOutputSuccess } from './IUserTypeControllerCreateUserTypeOutputSuccess';

export type IUserTypeControllerCreateUserTypeOutput =
  | IUserTypeControllerCreateUserTypeOutputSuccess
  | IUserTypeControllerCreateUserTypeOutputError;
