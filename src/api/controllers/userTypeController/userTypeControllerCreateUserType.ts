import { UserTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserTypeControllerCreateUserType,
  IUserTypeControllerCreateUserTypeOutputError,
  IUserTypeControllerCreateUserTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userTypeControllerCreateUserType
 *
 * The persona API create userType controller.
 *
 * @param { IUserTypeControllerCreateUserTypeInput } params
 * @param { Types.ObjectId } params.userTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IUserTypeControllerCreateUserTypeOutput> }
 * @returns { Promise<IUserTypeControllerCreateUserTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserTypeControllerCreateUserTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userTypeControllerCreateUserType: IUserTypeControllerCreateUserType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
      const userTypeId = new Types.ObjectId();
      const modelParams = {
        userTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'UserTypeModel'.
       * 'db-persona'. Then save the created
       * model to the associated store: 'db-persona',
       */
      const userTypeModel = new UserTypeModel(modelParams);
      await userTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        userTypeId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'IUserTypeControllerCreateUserTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IUserTypeControllerCreateUserTypeOutput'.
       */
      return stat as IUserTypeControllerCreateUserTypeOutputSuccess;
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
       * Cast the response object to 'IUserTypeControllerCreateUserTypeOutputError',
       */
      return stat as IUserTypeControllerCreateUserTypeOutputError;
    }
  };
