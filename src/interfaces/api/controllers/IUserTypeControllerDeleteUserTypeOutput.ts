import { IUserTypeControllerDeleteUserTypeOutputError } from './IUserTypeControllerDeleteUserTypeOutputError';
import { IUserTypeControllerDeleteUserTypeOutputSuccess } from './IUserTypeControllerDeleteUserTypeOutputSuccess';

export type IUserTypeControllerDeleteUserTypeOutput =
  | IUserTypeControllerDeleteUserTypeOutputSuccess
  | IUserTypeControllerDeleteUserTypeOutputError;
