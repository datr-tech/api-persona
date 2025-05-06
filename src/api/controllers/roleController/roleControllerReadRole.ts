import { RoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IRoleControllerReadRole,
  IRoleControllerReadRoleOutputError,
  IRoleControllerReadRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * roleControllerReadRole
 *
 * The persona API read role controller.
 *
 * @param { IRoleControllerReadRoleInput } params
 * @param { Types.ObjectId } params.roleId
 *
 * @returns { Promise<IRoleControllerReadRoleOutput> }
 * @returns { Promise<IRoleControllerReadRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IRoleControllerReadRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { roleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const roleControllerReadRole: IRoleControllerReadRole = async ({ roleId }) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'RoleModel'
     * using the received 'roleId' param.
     */
    const roleModel = await RoleModel.findById(roleId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = {
      roleModel,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to
     * 'IRoleControllerReadRoleOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IRoleControllerReadRoleOutput'.
     */
    return stat as IRoleControllerReadRoleOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = {
      message,
      responseStatusCode: 404,
    };

    /*
     * Cast the response object to 'IRoleControllerReadRoleOutputError',
     */
    return stat as IRoleControllerReadRoleOutputError;
  }
};
