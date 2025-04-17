import { organisationRoleControllerCreateOrganisationRole } from './organisationRoleControllerCreateOrganisationRole';
import { organisationRoleControllerUpdateOrganisationRole } from './organisationRoleControllerUpdateOrganisationRole';
import { organisationRoleControllerReadOrganisationRole } from './organisationRoleControllerReadOrganisationRole';
import { organisationRoleControllerDeleteOrganisationRole } from './organisationRoleControllerDeleteOrganisationRole';

export const organisationRoleController = {
  createOrganisationRole: organisationRoleControllerCreateOrganisationRole,
  updateOrganisationRole: organisationRoleControllerUpdateOrganisationRole,
  readOrganisationRole: organisationRoleControllerReadOrganisationRole,
  deleteOrganisationRole: organisationRoleControllerDeleteOrganisationRole,
};
