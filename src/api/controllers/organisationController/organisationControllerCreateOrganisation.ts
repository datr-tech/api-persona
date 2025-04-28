import { OrganisationModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationControllerCreateOrganisation,
  IOrganisationControllerCreateOrganisationOutputError,
  IOrganisationControllerCreateOrganisationOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationControllerCreateOrganisation
 *
 * The persona API create organisation controller.
 *
 * @param { IOrganisationControllerCreateOrganisationInput } params
 * @param { Types.ObjectId } params.organisationId
 * @param { Types.ObjectId } params.frameworkId
 * @param { Types.ObjectId } params.organisationTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IOrganisationControllerCreateOrganisationOutput> }
 * @returns { Promise<IOrganisationControllerCreateOrganisationOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationControllerCreateOrganisationOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationControllerCreateOrganisation: IOrganisationControllerCreateOrganisation =
  async ({
    frameworkId,
    organisationTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
    createdAt,
    updatedAt,
  }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
      const organisationId = new Types.ObjectId();
      const modelParams = {
        organisationId,
        frameworkId,
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
       * to create a new instance of 'OrganisationModel'.
       * 'db-persona'.
       */
      const organisationModel = new OrganisationModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-persona',
       */
      await organisationModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { organisationId: organisationModel.id };

      /*
       * Cast the response object to
       * 'IOrganisationControllerCreateOrganisationOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IOrganisationControllerCreateOrganisationOutput'.
       */
      return stat as IOrganisationControllerCreateOrganisationOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationControllerCreateOrganisationOutputError',
       */
      return stat as IOrganisationControllerCreateOrganisationOutputError;
    }
  };
