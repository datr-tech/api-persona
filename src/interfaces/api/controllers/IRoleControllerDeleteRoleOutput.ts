import { IRoleControllerDeleteRoleOutputError } from './IRoleControllerDeleteRoleOutputError';
import { IRoleControllerDeleteRoleOutputSuccess } from './IRoleControllerDeleteRoleOutputSuccess';

export type IRoleControllerDeleteRoleOutput =
  | IRoleControllerDeleteRoleOutputSuccess
  | IRoleControllerDeleteRoleOutputError;
