import { OrganisationRoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationRoleControllerDeleteOrganisationRole,
  IOrganisationRoleControllerDeleteOrganisationRoleOutputError,
  IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationRoleControllerDeleteOrganisationRole
 *
 * The persona API delete organisationRole controller.
 *
 * @param { IOrganisationRoleControllerDeleteOrganisationRoleInput } params
 * @param { Types.ObjectId } params.organisationRoleId
 *
 * @returns { Promise<IOrganisationRoleControllerDeleteOrganisationRoleOutput> }
 * @returns { Promise<IOrganisationRoleControllerDeleteOrganisationRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationRoleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationRoleControllerDeleteOrganisationRole: IOrganisationRoleControllerDeleteOrganisationRole =
  async ({ organisationRoleId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationRoleModel'
       * using the received 'organisationRoleId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await OrganisationRoleModel.findOneAndUpdate(
        {
          _id: organisationRoleId,
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
      stat.payload = {
        organisationRoleId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationRoleControllerDeleteOrganisationRoleOutput'.
       */
      return stat as IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess;
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
       * Cast the response object to 'IOrganisationRoleControllerDeleteOrganisationRoleOutputError',
       */
      return stat as IOrganisationRoleControllerDeleteOrganisationRoleOutputError;
    }
  };
