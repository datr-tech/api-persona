import { IRoleControllerUpdateRoleInput } from './IRoleControllerUpdateRoleInput';
import { IRoleControllerUpdateRoleOutput } from './IRoleControllerUpdateRoleOutput';

export interface IRoleControllerUpdateRole {
  (args: IRoleControllerUpdateRoleInput): Promise<IRoleControllerUpdateRoleOutput>;
}
