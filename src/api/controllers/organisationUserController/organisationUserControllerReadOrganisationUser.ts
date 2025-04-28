import { OrganisationUserModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IOrganisationUserControllerReadOrganisationUser,
  IOrganisationUserControllerReadOrganisationUserOutputError,
  IOrganisationUserControllerReadOrganisationUserOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * organisationUserControllerReadOrganisationUser
 *
 * The persona API read organisationUser controller.
 *
 * @param { IOrganisationUserControllerReadOrganisationUserInput } params
 * @param { Types.ObjectId } params.organisationUserId
 *
 * @returns { Promise<IOrganisationUserControllerReadOrganisationUserOutput> }
 * @returns { Promise<IOrganisationUserControllerReadOrganisationUserOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IOrganisationUserControllerReadOrganisationUserOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { organisationUserModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const organisationUserControllerReadOrganisationUser: IOrganisationUserControllerReadOrganisationUser =
  async ({ organisationUserId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'OrganisationUserModel'
       * using the received 'organisationUserId' param.
       */
      const organisationUserModel =
        await OrganisationUserModel.findById(organisationUserId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = { organisationUserModel };

      /*
       * Cast the response object to
       * 'IOrganisationUserControllerReadOrganisationUserOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IOrganisationUserControllerReadOrganisationUserOutput'.
       */
      return stat as IOrganisationUserControllerReadOrganisationUserOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IOrganisationUserControllerReadOrganisationUserOutputError',
       */
      return stat as IOrganisationUserControllerReadOrganisationUserOutputError;
    }
  };
