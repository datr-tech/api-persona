import { IRoleControllerUpdateRoleOutputError } from './IRoleControllerUpdateRoleOutputError';
import { IRoleControllerUpdateRoleOutputSuccess } from './IRoleControllerUpdateRoleOutputSuccess';

export type IRoleControllerUpdateRoleOutput =
  | IRoleControllerUpdateRoleOutputSuccess
  | IRoleControllerUpdateRoleOutputError;
