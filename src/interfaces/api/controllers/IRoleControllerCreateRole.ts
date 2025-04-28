import { IRoleControllerCreateRoleInput } from './IRoleControllerCreateRoleInput';
import { IRoleControllerCreateRoleOutput } from './IRoleControllerCreateRoleOutput';

export interface IRoleControllerCreateRole {
  (args: IRoleControllerCreateRoleInput): Promise<IRoleControllerCreateRoleOutput>;
}
