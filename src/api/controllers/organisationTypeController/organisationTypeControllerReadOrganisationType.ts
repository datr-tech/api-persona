import { OrganisationTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationTypeControllerReadOrganisationType,
  IOrganisationTypeControllerReadOrganisationTypeOutputError,
  IOrganisationTypeControllerReadOrganisationTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationTypeControllerReadOrganisationType
 *
 * The persona API read organisationType controller.
 *
 * @param { IOrganisationTypeControllerReadOrganisationTypeInput } params
 * @param { Types.ObjectId } params.organisationTypeId
 *
 * @returns { Promise<IOrganisationTypeControllerReadOrganisationTypeOutput> }
 * @returns { Promise<IOrganisationTypeControllerReadOrganisationTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationTypeControllerReadOrganisationTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationTypeControllerReadOrganisationType: IOrganisationTypeControllerReadOrganisationType =
  async ({ organisationTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationTypeModel'
       * using the received 'organisationTypeId' param.
       */
      const organisationTypeModel =
        await OrganisationTypeModel.findById(organisationTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = {
        organisationTypeModel,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IOrganisationTypeControllerReadOrganisationTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationTypeControllerReadOrganisationTypeOutput'.
       */
      return stat as IOrganisationTypeControllerReadOrganisationTypeOutputSuccess;
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
       * Cast the response object to 'IOrganisationTypeControllerReadOrganisationTypeOutputError',
       */
      return stat as IOrganisationTypeControllerReadOrganisationTypeOutputError;
    }
  };
