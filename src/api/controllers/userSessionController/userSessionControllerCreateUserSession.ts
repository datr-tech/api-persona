import { UserSessionModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserSessionControllerCreateUserSession,
  IUserSessionControllerCreateUserSessionOutputError,
  IUserSessionControllerCreateUserSessionOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userSessionControllerCreateUserSession
 *
 * The persona API create userSession controller.
 *
 * @param { IUserSessionControllerCreateUserSessionInput } params
 * @param { Types.ObjectId } params.userSessionId
 * @param { Types.ObjectId } params.userId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IUserSessionControllerCreateUserSessionOutput> }
 * @returns { Promise<IUserSessionControllerCreateUserSessionOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserSessionControllerCreateUserSessionOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userSessionModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userSessionControllerCreateUserSession: IUserSessionControllerCreateUserSession =
  async ({
    userId,
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
      const userSessionId = new Types.ObjectId();
      const modelParams = {
        userSessionId,
        userId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'UserSessionModel'.
       * 'db-persona'.
       */
      const userSessionModel = new UserSessionModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-persona',
       */
      await userSessionModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { userSessionId: userSessionModel.id };

      /*
       * Cast the response object to
       * 'IUserSessionControllerCreateUserSessionOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IUserSessionControllerCreateUserSessionOutput'.
       */
      return stat as IUserSessionControllerCreateUserSessionOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IUserSessionControllerCreateUserSessionOutputError',
       */
      return stat as IUserSessionControllerCreateUserSessionOutputError;
    }
  };
