import { OrganisationUserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationUserControllerDeleteOrganisationUser,
  IOrganisationUserControllerDeleteOrganisationUserOutputError,
  IOrganisationUserControllerDeleteOrganisationUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationUserControllerDeleteOrganisationUser
 *
 * The persona API delete organisationUser controller.
 *
 * @param { IOrganisationUserControllerDeleteOrganisationUserInput } params
 * @param { Types.ObjectId } params.organisationUserId
 *
 * @returns { Promise<IOrganisationUserControllerDeleteOrganisationUserOutput> }
 * @returns { Promise<IOrganisationUserControllerDeleteOrganisationUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationUserControllerDeleteOrganisationUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationUserModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationUserControllerDeleteOrganisationUser: IOrganisationUserControllerDeleteOrganisationUser =
  async ({ organisationUserId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationUserModel'
       * using the received 'organisationUserId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      const organisationUserModel = await OrganisationUserModel.findOneAndUpdate(
        {
          _id: organisationUserId,
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
      stat.payload = { organisationUserId: organisationUserModel.id };

      /*
       * Cast the response object to
       * 'IOrganisationUserControllerDeleteOrganisationUserOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IOrganisationUserControllerDeleteOrganisationUserOutput'.
       */
      return stat as IOrganisationUserControllerDeleteOrganisationUserOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationUserControllerDeleteOrganisationUserOutputError',
       */
      return stat as IOrganisationUserControllerDeleteOrganisationUserOutputError;
    }
  };
