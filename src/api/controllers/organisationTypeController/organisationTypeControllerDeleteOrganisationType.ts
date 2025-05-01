import { OrganisationTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationTypeControllerDeleteOrganisationType,
  IOrganisationTypeControllerDeleteOrganisationTypeOutputError,
  IOrganisationTypeControllerDeleteOrganisationTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationTypeControllerDeleteOrganisationType
 *
 * The persona API delete organisationType controller.
 *
 * @param { IOrganisationTypeControllerDeleteOrganisationTypeInput } params
 * @param { Types.ObjectId } params.organisationTypeId
 *
 * @returns { Promise<IOrganisationTypeControllerDeleteOrganisationTypeOutput> }
 * @returns { Promise<IOrganisationTypeControllerDeleteOrganisationTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationTypeControllerDeleteOrganisationTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationTypeControllerDeleteOrganisationType: IOrganisationTypeControllerDeleteOrganisationType =
  async ({ organisationTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationTypeModel'
       * using the received 'organisationTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await OrganisationTypeModel.findOneAndUpdate(
        {
          _id: organisationTypeId,
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
      stat.payload = { organisationTypeId };

      /*
       * Cast the response object to
       * 'IOrganisationTypeControllerDeleteOrganisationTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationTypeControllerDeleteOrganisationTypeOutput'.
       */
      return stat as IOrganisationTypeControllerDeleteOrganisationTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationTypeControllerDeleteOrganisationTypeOutputError',
       */
      return stat as IOrganisationTypeControllerDeleteOrganisationTypeOutputError;
    }
  };
