import { organisationUserControllerCreateOrganisationUser } from './organisationUserControllerCreateOrganisationUser';
import { organisationUserControllerDeleteOrganisationUser } from './organisationUserControllerDeleteOrganisationUser';
import { organisationUserControllerReadOrganisationUser } from './organisationUserControllerReadOrganisationUser';
import { organisationUserControllerUpdateOrganisationUser } from './organisationUserControllerUpdateOrganisationUser';

export const organisationUserController = {
  createOrganisationUser: organisationUserControllerCreateOrganisationUser,
  updateOrganisationUser: organisationUserControllerUpdateOrganisationUser,
  readOrganisationUser: organisationUserControllerReadOrganisationUser,
  deleteOrganisationUser: organisationUserControllerDeleteOrganisationUser,
};
