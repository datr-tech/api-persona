import { RoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IRoleControllerCreateRole,
  IRoleControllerCreateRoleOutputError,
  IRoleControllerCreateRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * roleControllerCreateRole
 *
 * The persona API create role controller.
 *
 * @param { IRoleControllerCreateRoleInput } params
 * @param { Types.ObjectId } params.roleId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IRoleControllerCreateRoleOutput> }
 * @returns { Promise<IRoleControllerCreateRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IRoleControllerCreateRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { roleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const roleControllerCreateRole: IRoleControllerCreateRole = async ({
  description,
  name,
  adminStatusId,
  adminUserId,
  createdAt,
  updatedAt,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Populate the local 'modelParams' variable
     * with the received inputs.
     */
    const roleId = new Types.ObjectId();
    const modelParams = {
      roleId,
      description,
      name,
      adminStatusId,
      adminUserId,
      createdAt,
      updatedAt,
    };

    /*
     * Use the populated 'modelParams' variable
     * to create a new instance of 'RoleModel'.
     * 'db-persona'. Then save the created
     * model to the associated store: 'db-persona',
     */
    const roleModel = new RoleModel(modelParams);
    await roleModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model's primary key.
     */
    stat.error = false;
    stat.payload = { roleId };

    /*
     * Cast the response object to
     * 'IRoleControllerCreateRoleOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IRoleControllerCreateRoleOutput'.
     */
    return stat as IRoleControllerCreateRoleOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IRoleControllerCreateRoleOutputError',
     */
    return stat as IRoleControllerCreateRoleOutputError;
  }
};
