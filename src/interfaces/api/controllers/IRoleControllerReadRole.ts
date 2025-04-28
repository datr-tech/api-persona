import { IRoleControllerReadRoleInput } from './IRoleControllerReadRoleInput';
import { IRoleControllerReadRoleOutput } from './IRoleControllerReadRoleOutput';

export interface IRoleControllerReadRole {
  (args: IRoleControllerReadRoleInput): Promise<IRoleControllerReadRoleOutput>;
}
