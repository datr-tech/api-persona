import { IUserTypeControllerReadUserTypeOutputError } from './IUserTypeControllerReadUserTypeOutputError';
import { IUserTypeControllerReadUserTypeOutputSuccess } from './IUserTypeControllerReadUserTypeOutputSuccess';

export type IUserTypeControllerReadUserTypeOutput =
  | IUserTypeControllerReadUserTypeOutputSuccess
  | IUserTypeControllerReadUserTypeOutputError;
