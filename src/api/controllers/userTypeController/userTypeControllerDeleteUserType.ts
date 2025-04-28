import { UserTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserTypeControllerDeleteUserType,
  IUserTypeControllerDeleteUserTypeOutputError,
  IUserTypeControllerDeleteUserTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * userTypeControllerDeleteUserType
 *
 * The persona API delete userType controller.
 *
 * @param { IUserTypeControllerDeleteUserTypeInput } params
 * @param { Types.ObjectId } params.userTypeId
 *
 * @returns { Promise<IUserTypeControllerDeleteUserTypeOutput> }
 * @returns { Promise<IUserTypeControllerDeleteUserTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserTypeControllerDeleteUserTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userTypeControllerDeleteUserType: IUserTypeControllerDeleteUserType =
  async ({ userTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'UserTypeModel'
       * using the received 'userTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const userTypeModel = await UserTypeModel.findOneAndUpdate(
        {
          _id: userTypeId,
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
      stat.payload = { userTypeId };

      /*
       * Cast the response object to
       * 'IUserTypeControllerDeleteUserTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IUserTypeControllerDeleteUserTypeOutput'.
       */
      return stat as IUserTypeControllerDeleteUserTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IUserTypeControllerDeleteUserTypeOutputError',
       */
      return stat as IUserTypeControllerDeleteUserTypeOutputError;
    }
  };
