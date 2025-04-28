import { IUserTypeControllerUpdateUserTypeOutputError } from './IUserTypeControllerUpdateUserTypeOutputError';
import { IUserTypeControllerUpdateUserTypeOutputSuccess } from './IUserTypeControllerUpdateUserTypeOutputSuccess';

export type IUserTypeControllerUpdateUserTypeOutput =
  | IUserTypeControllerUpdateUserTypeOutputSuccess
  | IUserTypeControllerUpdateUserTypeOutputError;
