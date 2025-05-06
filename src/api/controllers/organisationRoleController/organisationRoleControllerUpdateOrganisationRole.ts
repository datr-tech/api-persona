import { OrganisationRoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationRoleControllerUpdateOrganisationRole,
  IOrganisationRoleControllerUpdateOrganisationRoleOutputError,
  IOrganisationRoleControllerUpdateOrganisationRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationRoleControllerUpdateOrganisationRole
 *
 * The persona API update organisationRole controller.
 *
 * @param { IOrganisationRoleControllerUpdateOrganisationRoleInput } params
 * @param { Types.ObjectId } params.organisationRoleId
 * @param { Types.ObjectId } params.payload.organisationId  (Optional)
 * @param { Types.ObjectId } params.payload.roleId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IOrganisationRoleControllerUpdateOrganisationRoleOutput> }
 * @returns { Promise<IOrganisationRoleControllerUpdateOrganisationRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationRoleControllerUpdateOrganisationRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationRoleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationRoleControllerUpdateOrganisationRole: IOrganisationRoleControllerUpdateOrganisationRole =
  async ({ organisationRoleId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationRoleModel'
       * using the received 'organisationRoleId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await OrganisationRoleModel.findOneAndUpdate(
        {
          _id: organisationRoleId,
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
        organisationRoleId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IOrganisationRoleControllerUpdateOrganisationRoleOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IOrganisationRoleControllerUpdateOrganisationRoleOutput'.
       */
      return stat as IOrganisationRoleControllerUpdateOrganisationRoleOutputSuccess;
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
       * Cast the response object to 'IOrganisationRoleControllerUpdateOrganisationRoleOutputError',
       */
      return stat as IOrganisationRoleControllerUpdateOrganisationRoleOutputError;
    }
  };
