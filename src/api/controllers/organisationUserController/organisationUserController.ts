import { organisationUserControllerCreateOrganisationUser } from './organisationUserControllerCreateOrganisationUser';
import { organisationUserControllerUpdateOrganisationUser } from './organisationUserControllerUpdateOrganisationUser';
import { organisationUserControllerReadOrganisationUser } from './organisationUserControllerReadOrganisationUser';
import { organisationUserControllerDeleteOrganisationUser } from './organisationUserControllerDeleteOrganisationUser';

export const organisationUserController = {
  createOrganisationUser: organisationUserControllerCreateOrganisationUser,
  updateOrganisationUser: organisationUserControllerUpdateOrganisationUser,
  readOrganisationUser: organisationUserControllerReadOrganisationUser,
  deleteOrganisationUser: organisationUserControllerDeleteOrganisationUser,
};
