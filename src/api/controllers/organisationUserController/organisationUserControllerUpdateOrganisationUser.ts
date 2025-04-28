import { OrganisationUserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationUserControllerUpdateOrganisationUser,
  IOrganisationUserControllerUpdateOrganisationUserOutputError,
  IOrganisationUserControllerUpdateOrganisationUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationUserControllerUpdateOrganisationUser
 *
 * The persona API update organisationUser controller.
 *
 * @param { IOrganisationUserControllerUpdateOrganisationUserInput } params
 * @param { Types.ObjectId } params.organisationUserId
 * @param { Types.ObjectId } params.payload.organisationId  (Optional)
 * @param { Types.ObjectId } params.payload.userId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IOrganisationUserControllerUpdateOrganisationUserOutput> }
 * @returns { Promise<IOrganisationUserControllerUpdateOrganisationUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationUserControllerUpdateOrganisationUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationUserModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationUserControllerUpdateOrganisationUser: IOrganisationUserControllerUpdateOrganisationUser =
  async ({ organisationUserId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationUserModel'
       * using the received 'organisationUserId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await OrganisationUserModel.findOneAndUpdate(
        {
          _id: organisationUserId,
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
      stat.payload = { organisationUserId };

      /*
       * Cast the response object to 'IOrganisationUserControllerUpdateOrganisationUserOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IOrganisationUserControllerUpdateOrganisationUserOutput'.
       */
      return stat as IOrganisationUserControllerUpdateOrganisationUserOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationUserControllerUpdateOrganisationUserOutputError',
       */
      return stat as IOrganisationUserControllerUpdateOrganisationUserOutputError;
    }
  };
