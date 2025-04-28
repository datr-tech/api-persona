import { UserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserControllerCreateUser,
  IUserControllerCreateUserOutputError,
  IUserControllerCreateUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userControllerCreateUser
 *
 * The persona API create user controller.
 *
 * @param { IUserControllerCreateUserInput } params
 * @param { Types.ObjectId } params.userId
 * @param { Types.ObjectId } params.userTypeId
 * @param { string } params.username
 * @param { string } params.password
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IUserControllerCreateUserOutput> }
 * @returns { Promise<IUserControllerCreateUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserControllerCreateUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userControllerCreateUser: IUserControllerCreateUser = async ({
  userTypeId,
  username,
  password,
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
    const userId = new Types.ObjectId();
    const modelParams = {
      userId,
      userTypeId,
      username,
      password,
      adminStatusId,
      adminUserId,
      createdAt,
      updatedAt,
    };

    /*
     * Use the populated 'modelParams' variable
     * to create a new instance of 'UserModel'.
     * 'db-persona'.
     */
    const userModel = new UserModel(modelParams);

    /*
     * The save the created model to the associated store: 'db-persona',
     */
    await userModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { userId: userModel.id };

    /*
     * Cast the response object to
     * 'IUserControllerCreateUserOutputSuccess',
     * where the casting interface is a component of
     * the binary union type
     * 'IUserControllerCreateUserOutput'.
     */
    return stat as IUserControllerCreateUserOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IUserControllerCreateUserOutputError',
     */
    return stat as IUserControllerCreateUserOutputError;
  }
};
