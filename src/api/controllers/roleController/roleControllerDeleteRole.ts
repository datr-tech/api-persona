import { RoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IRoleControllerDeleteRole,
  IRoleControllerDeleteRoleOutputError,
  IRoleControllerDeleteRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * roleControllerDeleteRole
 *
 * The persona API delete role controller.
 *
 * @param { IRoleControllerDeleteRoleInput } params
 * @param { Types.ObjectId } params.roleId
 *
 * @returns { Promise<IRoleControllerDeleteRoleOutput> }
 * @returns { Promise<IRoleControllerDeleteRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IRoleControllerDeleteRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { roleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const roleControllerDeleteRole: IRoleControllerDeleteRole = async ({ roleId }) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'RoleModel'
     * using the received 'roleId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
    await RoleModel.findOneAndUpdate(
      {
        _id: roleId,
      },
      {
        adminStatusId: new Types.ObjectId(),
      },
      {
        includeResultMetadata: true,
      },
    );

    /*
     * Use the standard controller response object,
     * 'stat', to return the primary key of the
     * "soft deleted" model.
     */
    stat.error = false;
    stat.payload = { roleId };

    /*
     * Cast the response object to
     * 'IRoleControllerDeleteRoleOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IRoleControllerDeleteRoleOutput'.
     */
    return stat as IRoleControllerDeleteRoleOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IRoleControllerDeleteRoleOutputError',
     */
    return stat as IRoleControllerDeleteRoleOutputError;
  }
};
