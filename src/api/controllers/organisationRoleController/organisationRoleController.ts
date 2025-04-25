import { organisationRoleControllerCreateOrganisationRole } from './organisationRoleControllerCreateOrganisationRole';
import { organisationRoleControllerDeleteOrganisationRole } from './organisationRoleControllerDeleteOrganisationRole';
import { organisationRoleControllerReadOrganisationRole } from './organisationRoleControllerReadOrganisationRole';
import { organisationRoleControllerUpdateOrganisationRole } from './organisationRoleControllerUpdateOrganisationRole';

export const organisationRoleController = {
  createOrganisationRole: organisationRoleControllerCreateOrganisationRole,
  updateOrganisationRole: organisationRoleControllerUpdateOrganisationRole,
  readOrganisationRole: organisationRoleControllerReadOrganisationRole,
  deleteOrganisationRole: organisationRoleControllerDeleteOrganisationRole,
};
