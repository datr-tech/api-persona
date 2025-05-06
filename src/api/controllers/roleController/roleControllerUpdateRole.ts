import { RoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IRoleControllerUpdateRole,
  IRoleControllerUpdateRoleOutputError,
  IRoleControllerUpdateRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * roleControllerUpdateRole
 *
 * The persona API update role controller.
 *
 * @param { IRoleControllerUpdateRoleInput } params
 * @param { Types.ObjectId } params.roleId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IRoleControllerUpdateRoleOutput> }
 * @returns { Promise<IRoleControllerUpdateRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IRoleControllerUpdateRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { roleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const roleControllerUpdateRole: IRoleControllerUpdateRole = async ({
  roleId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'RoleModel'
     * using the received 'roleId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await RoleModel.findOneAndUpdate(
      {
        _id: roleId,
      },
      payload,
      {
        includeResultMetadata: true,
      },
    );

    /*
     * Use the standard controller response object,
     * 'stat', to return the updated model's primary key.
     */
    stat.error = false;
    stat.payload = {
      roleId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to 'IRoleControllerUpdateRoleOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IRoleControllerUpdateRoleOutput'.
     */
    return stat as IRoleControllerUpdateRoleOutputSuccess;
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
     * Cast the response object to 'IRoleControllerUpdateRoleOutputError',
     */
    return stat as IRoleControllerUpdateRoleOutputError;
  }
};
