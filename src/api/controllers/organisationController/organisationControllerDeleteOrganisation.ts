import { OrganisationModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationControllerDeleteOrganisation,
  IOrganisationControllerDeleteOrganisationOutputError,
  IOrganisationControllerDeleteOrganisationOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationControllerDeleteOrganisation
 *
 * The persona API delete organisation controller.
 *
 * @param { IOrganisationControllerDeleteOrganisationInput } params
 * @param { Types.ObjectId } params.organisationId
 *
 * @returns { Promise<IOrganisationControllerDeleteOrganisationOutput> }
 * @returns { Promise<IOrganisationControllerDeleteOrganisationOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationControllerDeleteOrganisationOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationControllerDeleteOrganisation: IOrganisationControllerDeleteOrganisation =
  async ({ organisationId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationModel'
       * using the received 'organisationId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await OrganisationModel.findOneAndUpdate(
        {
          _id: organisationId,
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
        organisationId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IOrganisationControllerDeleteOrganisationOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationControllerDeleteOrganisationOutput'.
       */
      return stat as IOrganisationControllerDeleteOrganisationOutputSuccess;
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
       * Cast the response object to 'IOrganisationControllerDeleteOrganisationOutputError',
       */
      return stat as IOrganisationControllerDeleteOrganisationOutputError;
    }
  };
