import { IRoleControllerCreateRoleOutputError } from './IRoleControllerCreateRoleOutputError';
import { IRoleControllerCreateRoleOutputSuccess } from './IRoleControllerCreateRoleOutputSuccess';

export type IRoleControllerCreateRoleOutput =
  | IRoleControllerCreateRoleOutputSuccess
  | IRoleControllerCreateRoleOutputError;
