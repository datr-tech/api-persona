import { OrganisationModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationControllerUpdateOrganisation,
  IOrganisationControllerUpdateOrganisationOutputError,
  IOrganisationControllerUpdateOrganisationOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationControllerUpdateOrganisation
 *
 * The persona API update organisation controller.
 *
 * @param { IOrganisationControllerUpdateOrganisationInput } params
 * @param { Types.ObjectId } params.organisationId
 * @param { Types.ObjectId } params.payload.frameworkId  (Optional)
 * @param { Types.ObjectId } params.payload.organisationTypeId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IOrganisationControllerUpdateOrganisationOutput> }
 * @returns { Promise<IOrganisationControllerUpdateOrganisationOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationControllerUpdateOrganisationOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationControllerUpdateOrganisation: IOrganisationControllerUpdateOrganisation =
  async ({ organisationId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationModel'
       * using the received 'organisationId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await OrganisationModel.findOneAndUpdate(
        {
          _id: organisationId,
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
      stat.payload = { organisationId };

      /*
       * Cast the response object to 'IOrganisationControllerUpdateOrganisationOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IOrganisationControllerUpdateOrganisationOutput'.
       */
      return stat as IOrganisationControllerUpdateOrganisationOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationControllerUpdateOrganisationOutputError',
       */
      return stat as IOrganisationControllerUpdateOrganisationOutputError;
    }
  };
