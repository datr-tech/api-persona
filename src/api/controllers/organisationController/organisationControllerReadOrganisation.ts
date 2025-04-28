import { OrganisationModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationControllerReadOrganisation,
  IOrganisationControllerReadOrganisationOutputError,
  IOrganisationControllerReadOrganisationOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationControllerReadOrganisation
 *
 * The persona API read organisation controller.
 *
 * @param { IOrganisationControllerReadOrganisationInput } params
 * @param { Types.ObjectId } params.organisationId
 *
 * @returns { Promise<IOrganisationControllerReadOrganisationOutput> }
 * @returns { Promise<IOrganisationControllerReadOrganisationOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationControllerReadOrganisationOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationControllerReadOrganisation: IOrganisationControllerReadOrganisation =
  async ({ organisationId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationModel'
       * using the received 'organisationId' param.
       */
      const organisationModel = await OrganisationModel.findById(organisationId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { organisationModel };

      /*
       * Cast the response object to
       * 'IOrganisationControllerReadOrganisationOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationControllerReadOrganisationOutput'.
       */
      return stat as IOrganisationControllerReadOrganisationOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationControllerReadOrganisationOutputError',
       */
      return stat as IOrganisationControllerReadOrganisationOutputError;
    }
  };
