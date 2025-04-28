import { UserSessionModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserSessionControllerReadUserSession,
  IUserSessionControllerReadUserSessionOutputError,
  IUserSessionControllerReadUserSessionOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * userSessionControllerReadUserSession
 *
 * The persona API read userSession controller.
 *
 * @param { IUserSessionControllerReadUserSessionInput } params
 * @param { Types.ObjectId } params.userSessionId
 *
 * @returns { Promise<IUserSessionControllerReadUserSessionOutput> }
 * @returns { Promise<IUserSessionControllerReadUserSessionOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserSessionControllerReadUserSessionOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userSessionModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userSessionControllerReadUserSession: IUserSessionControllerReadUserSession =
  async ({ userSessionId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserSessionModel'
       * using the received 'userSessionId' param.
       */
      const userSessionModel = await UserSessionModel.findById(userSessionId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { userSessionModel };

      /*
       * Cast the response object to
       * 'IUserSessionControllerReadUserSessionOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IUserSessionControllerReadUserSessionOutput'.
       */
      return stat as IUserSessionControllerReadUserSessionOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IUserSessionControllerReadUserSessionOutputError',
       */
      return stat as IUserSessionControllerReadUserSessionOutputError;
    }
  };
