import { OrganisationUserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationUserControllerCreateOrganisationUser,
  IOrganisationUserControllerCreateOrganisationUserOutputError,
  IOrganisationUserControllerCreateOrganisationUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * organisationUserControllerCreateOrganisationUser
 *
 * The persona API create organisationUser controller.
 *
 * @param { IOrganisationUserControllerCreateOrganisationUserInput } params
 * @param { Types.ObjectId } params.organisationUserId
 * @param { Types.ObjectId } params.organisationId
 * @param { Types.ObjectId } params.userId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IOrganisationUserControllerCreateOrganisationUserOutput> }
 * @returns { Promise<IOrganisationUserControllerCreateOrganisationUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationUserControllerCreateOrganisationUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationUserModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationUserControllerCreateOrganisationUser: IOrganisationUserControllerCreateOrganisationUser =
  async ({
    organisationId,
    userId,
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
      const organisationUserId = new Types.ObjectId();
      const modelParams = {
        organisationUserId,
        organisationId,
        userId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'OrganisationUserModel'.
       * 'db-persona'. Then save the created
       * model to the associated store: 'db-persona',
       */
      const organisationUserModel = new OrganisationUserModel(modelParams);
      await organisationUserModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        organisationUserId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'IOrganisationUserControllerCreateOrganisationUserOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationUserControllerCreateOrganisationUserOutput'.
       */
      return stat as IOrganisationUserControllerCreateOrganisationUserOutputSuccess;
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
       * Cast the response object to 'IOrganisationUserControllerCreateOrganisationUserOutputError',
       */
      return stat as IOrganisationUserControllerCreateOrganisationUserOutputError;
    }
  };
