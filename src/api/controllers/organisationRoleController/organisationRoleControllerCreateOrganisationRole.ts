import { OrganisationRoleModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationRoleControllerCreateOrganisationRole,
  IOrganisationRoleControllerCreateOrganisationRoleOutputError,
  IOrganisationRoleControllerCreateOrganisationRoleOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationRoleControllerCreateOrganisationRole
 *
 * The persona API create organisationRole controller.
 *
 * @param { IOrganisationRoleControllerCreateOrganisationRoleInput } params
 * @param { Types.ObjectId } params.organisationRoleId
 * @param { Types.ObjectId } params.organisationId
 * @param { Types.ObjectId } params.roleId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IOrganisationRoleControllerCreateOrganisationRoleOutput> }
 * @returns { Promise<IOrganisationRoleControllerCreateOrganisationRoleOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationRoleControllerCreateOrganisationRoleOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationRoleModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationRoleControllerCreateOrganisationRole: IOrganisationRoleControllerCreateOrganisationRole =
  async ({
    organisationId,
    roleId,
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
      const organisationRoleId = new Types.ObjectId();
      const modelParams = {
        organisationRoleId,
        organisationId,
        roleId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'OrganisationRoleModel'.
       * 'db-persona'.
       */
      const organisationRoleModel = new OrganisationRoleModel(modelParams);

      /*
       * The save the created model to the associated store: 'db-persona',
       */
      await organisationRoleModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { organisationRoleId: organisationRoleModel.id };

      /*
       * Cast the response object to
       * 'IOrganisationRoleControllerCreateOrganisationRoleOutputSuccess',
       * where the casting interface is a component of
       * the binary union type
       * 'IOrganisationRoleControllerCreateOrganisationRoleOutput'.
       */
      return stat as IOrganisationRoleControllerCreateOrganisationRoleOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationRoleControllerCreateOrganisationRoleOutputError',
       */
      return stat as IOrganisationRoleControllerCreateOrganisationRoleOutputError;
    }
  };
