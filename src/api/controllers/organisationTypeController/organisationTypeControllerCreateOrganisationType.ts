import { OrganisationTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationTypeControllerCreateOrganisationType,
  IOrganisationTypeControllerCreateOrganisationTypeOutputError,
  IOrganisationTypeControllerCreateOrganisationTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationTypeControllerCreateOrganisationType
 *
 * The persona API create organisationType controller.
 *
 * @param { IOrganisationTypeControllerCreateOrganisationTypeInput } params
 * @param { Types.ObjectId } params.organisationTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IOrganisationTypeControllerCreateOrganisationTypeOutput> }
 * @returns { Promise<IOrganisationTypeControllerCreateOrganisationTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationTypeControllerCreateOrganisationTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationTypeControllerCreateOrganisationType: IOrganisationTypeControllerCreateOrganisationType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
      const organisationTypeId = new Types.ObjectId();
      const modelParams = {
        organisationTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'OrganisationTypeModel'.
       * 'db-persona'. Then save the created
       * model to the associated store: 'db-persona',
       */
      const organisationTypeModel = new OrganisationTypeModel(modelParams);
      await organisationTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = { organisationTypeId };

      /*
       * Cast the response object to
       * 'IOrganisationTypeControllerCreateOrganisationTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationTypeControllerCreateOrganisationTypeOutput'.
       */
      return stat as IOrganisationTypeControllerCreateOrganisationTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationTypeControllerCreateOrganisationTypeOutputError',
       */
      return stat as IOrganisationTypeControllerCreateOrganisationTypeOutputError;
    }
  };
