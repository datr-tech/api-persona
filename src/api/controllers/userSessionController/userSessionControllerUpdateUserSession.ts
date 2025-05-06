import { UserSessionModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserSessionControllerUpdateUserSession,
  IUserSessionControllerUpdateUserSessionOutputError,
  IUserSessionControllerUpdateUserSessionOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * userSessionControllerUpdateUserSession
 *
 * The persona API update userSession controller.
 *
 * @param { IUserSessionControllerUpdateUserSessionInput } params
 * @param { Types.ObjectId } params.userSessionId
 * @param { Types.ObjectId } params.payload.userId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IUserSessionControllerUpdateUserSessionOutput> }
 * @returns { Promise<IUserSessionControllerUpdateUserSessionOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserSessionControllerUpdateUserSessionOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userSessionModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userSessionControllerUpdateUserSession: IUserSessionControllerUpdateUserSession =
  async ({ userSessionId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserSessionModel'
       * using the received 'userSessionId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await UserSessionModel.findOneAndUpdate(
        {
          _id: userSessionId,
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
        userSessionId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IUserSessionControllerUpdateUserSessionOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IUserSessionControllerUpdateUserSessionOutput'.
       */
      return stat as IUserSessionControllerUpdateUserSessionOutputSuccess;
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
       * Cast the response object to 'IUserSessionControllerUpdateUserSessionOutputError',
       */
      return stat as IUserSessionControllerUpdateUserSessionOutputError;
    }
  };
