import { OrganisationRoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationRoleControllerReadOrganisationRole,
  IOrganisationRoleControllerReadOrganisationRoleOutputError,
  IOrganisationRoleControllerReadOrganisationRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationRoleControllerReadOrganisationRole
 *
 * The persona API read organisationRole controller.
 *
 * @param { IOrganisationRoleControllerReadOrganisationRoleInput } params
 * @param { Types.ObjectId } params.organisationRoleId
 *
 * @returns { Promise<IOrganisationRoleControllerReadOrganisationRoleOutput> }
 * @returns { Promise<IOrganisationRoleControllerReadOrganisationRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationRoleControllerReadOrganisationRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationRoleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationRoleControllerReadOrganisationRole: IOrganisationRoleControllerReadOrganisationRole =
  async ({ organisationRoleId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationRoleModel'
       * using the received 'organisationRoleId' param.
       */
      const organisationRoleModel =
        await OrganisationRoleModel.findById(organisationRoleId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = {
        organisationRoleModel,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IOrganisationRoleControllerReadOrganisationRoleOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationRoleControllerReadOrganisationRoleOutput'.
       */
      return stat as IOrganisationRoleControllerReadOrganisationRoleOutputSuccess;
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
       * Cast the response object to 'IOrganisationRoleControllerReadOrganisationRoleOutputError',
       */
      return stat as IOrganisationRoleControllerReadOrganisationRoleOutputError;
    }
  };
