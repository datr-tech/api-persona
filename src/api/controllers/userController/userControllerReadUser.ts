import { UserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserControllerReadUser,
  IUserControllerReadUserOutputError,
  IUserControllerReadUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * userControllerReadUser
 *
 * The persona API read user controller.
 *
 * @param { IUserControllerReadUserInput } params
 * @param { Types.ObjectId } params.userId
 *
 * @returns { Promise<IUserControllerReadUserOutput> }
 * @returns { Promise<IUserControllerReadUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserControllerReadUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userControllerReadUser: IUserControllerReadUser = async ({ userId }) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'UserModel'
     * using the received 'userId' param.
     */
    const userModel = await UserModel.findById(userId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { userModel };

    /*
     * Cast the response object to 'IUserControllerReadUserOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IUserControllerReadUserOutput'.
     */
    return stat as IUserControllerReadUserOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IUserControllerReadUserOutputError',
     */
    return stat as IUserControllerReadUserOutputError;
  }
};
