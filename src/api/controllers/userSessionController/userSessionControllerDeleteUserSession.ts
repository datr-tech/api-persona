import { UserSessionModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserSessionControllerDeleteUserSession,
  IUserSessionControllerDeleteUserSessionOutputError,
  IUserSessionControllerDeleteUserSessionOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userSessionControllerDeleteUserSession
 *
 * The persona API delete userSession controller.
 *
 * @param { IUserSessionControllerDeleteUserSessionInput } params
 * @param { Types.ObjectId } params.userSessionId
 *
 * @returns { Promise<IUserSessionControllerDeleteUserSessionOutput> }
 * @returns { Promise<IUserSessionControllerDeleteUserSessionOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserSessionControllerDeleteUserSessionOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userSessionModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userSessionControllerDeleteUserSession: IUserSessionControllerDeleteUserSession =
  async ({ userSessionId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserSessionModel'
       * using the received 'userSessionId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const userSessionModel = await UserSessionModel.findOneAndUpdate(
        {
          _id: userSessionId,
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
      stat.payload = { userSessionId: userSessionModel.id };

      /*
       * Cast the response object to
       * 'IUserSessionControllerDeleteUserSessionOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IUserSessionControllerDeleteUserSessionOutput'.
       */
      return stat as IUserSessionControllerDeleteUserSessionOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IUserSessionControllerDeleteUserSessionOutputError',
       */
      return stat as IUserSessionControllerDeleteUserSessionOutputError;
    }
  };
