import { UserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserControllerDeleteUser,
  IUserControllerDeleteUserOutputError,
  IUserControllerDeleteUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userControllerDeleteUser
 *
 * The persona API delete user controller.
 *
 * @param { IUserControllerDeleteUserInput } params
 * @param { Types.ObjectId } params.userId
 *
 * @returns { Promise<IUserControllerDeleteUserOutput> }
 * @returns { Promise<IUserControllerDeleteUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserControllerDeleteUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userControllerDeleteUser: IUserControllerDeleteUser = async ({ userId }) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'UserModel'
     * using the received 'userId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
    await UserModel.findOneAndUpdate(
      {
        _id: userId,
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
    stat.payload = {
      userId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to
     * 'IUserControllerDeleteUserOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IUserControllerDeleteUserOutput'.
     */
    return stat as IUserControllerDeleteUserOutputSuccess;
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
     * Cast the response object to 'IUserControllerDeleteUserOutputError',
     */
    return stat as IUserControllerDeleteUserOutputError;
  }
};
