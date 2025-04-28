import { IRoleControllerDeleteRoleInput } from './IRoleControllerDeleteRoleInput';
import { IRoleControllerDeleteRoleOutput } from './IRoleControllerDeleteRoleOutput';

export interface IRoleControllerDeleteRole {
  (args: IRoleControllerDeleteRoleInput): Promise<IRoleControllerDeleteRoleOutput>;
}
