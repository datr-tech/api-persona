import { OrganisationTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationTypeControllerUpdateOrganisationType,
  IOrganisationTypeControllerUpdateOrganisationTypeOutputError,
  IOrganisationTypeControllerUpdateOrganisationTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationTypeControllerUpdateOrganisationType
 *
 * The persona API update organisationType controller.
 *
 * @param { IOrganisationTypeControllerUpdateOrganisationTypeInput } params
 * @param { Types.ObjectId } params.organisationTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IOrganisationTypeControllerUpdateOrganisationTypeOutput> }
 * @returns { Promise<IOrganisationTypeControllerUpdateOrganisationTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationTypeControllerUpdateOrganisationTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationTypeControllerUpdateOrganisationType: IOrganisationTypeControllerUpdateOrganisationType =
  async ({ organisationTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationTypeModel'
       * using the received 'organisationTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await OrganisationTypeModel.findOneAndUpdate(
        {
          _id: organisationTypeId,
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
        organisationTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IOrganisationTypeControllerUpdateOrganisationTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IOrganisationTypeControllerUpdateOrganisationTypeOutput'.
       */
      return stat as IOrganisationTypeControllerUpdateOrganisationTypeOutputSuccess;
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
       * Cast the response object to 'IOrganisationTypeControllerUpdateOrganisationTypeOutputError',
       */
      return stat as IOrganisationTypeControllerUpdateOrganisationTypeOutputError;
    }
  };
