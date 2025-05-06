import { UserTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserTypeControllerUpdateUserType,
  IUserTypeControllerUpdateUserTypeOutputError,
  IUserTypeControllerUpdateUserTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * userTypeControllerUpdateUserType
 *
 * The persona API update userType controller.
 *
 * @param { IUserTypeControllerUpdateUserTypeInput } params
 * @param { Types.ObjectId } params.userTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IUserTypeControllerUpdateUserTypeOutput> }
 * @returns { Promise<IUserTypeControllerUpdateUserTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserTypeControllerUpdateUserTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userTypeControllerUpdateUserType: IUserTypeControllerUpdateUserType =
  async ({ userTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserTypeModel'
       * using the received 'userTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await UserTypeModel.findOneAndUpdate(
        {
          _id: userTypeId,
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
        userTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IUserTypeControllerUpdateUserTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IUserTypeControllerUpdateUserTypeOutput'.
       */
      return stat as IUserTypeControllerUpdateUserTypeOutputSuccess;
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
       * Cast the response object to 'IUserTypeControllerUpdateUserTypeOutputError',
       */
      return stat as IUserTypeControllerUpdateUserTypeOutputError;
    }
  };
