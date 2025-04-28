import { IRoleControllerReadRoleOutputError } from './IRoleControllerReadRoleOutputError';
import { IRoleControllerReadRoleOutputSuccess } from './IRoleControllerReadRoleOutputSuccess';

export type IRoleControllerReadRoleOutput =
  | IRoleControllerReadRoleOutputSuccess
  | IRoleControllerReadRoleOutputError;
