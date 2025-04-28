import { UserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserControllerUpdateUser,
  IUserControllerUpdateUserOutputError,
  IUserControllerUpdateUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * userControllerUpdateUser
 *
 * The persona API update user controller.
 *
 * @param { IUserControllerUpdateUserInput } params
 * @param { Types.ObjectId } params.userId
 * @param { Types.ObjectId } params.payload.userTypeId  (Optional)
 * @param { string } params.payload.username  (Optional)
 * @param { string } params.payload.password  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IUserControllerUpdateUserOutput> }
 * @returns { Promise<IUserControllerUpdateUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserControllerUpdateUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userControllerUpdateUser: IUserControllerUpdateUser = async ({
  userId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'UserModel'
     * using the received 'userId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await UserModel.findOneAndUpdate(
      {
        _id: userId,
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
    stat.payload = { userId };

    /*
     * Cast the response object to 'IUserControllerUpdateUserOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IUserControllerUpdateUserOutput'.
     */
    return stat as IUserControllerUpdateUserOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IUserControllerUpdateUserOutputError',
     */
    return stat as IUserControllerUpdateUserOutputError;
  }
};
