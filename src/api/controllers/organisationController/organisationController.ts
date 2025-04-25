import { organisationControllerCreateOrganisation } from './organisationControllerCreateOrganisation';
import { organisationControllerDeleteOrganisation } from './organisationControllerDeleteOrganisation';
import { organisationControllerReadOrganisation } from './organisationControllerReadOrganisation';
import { organisationControllerUpdateOrganisation } from './organisationControllerUpdateOrganisation';

export const organisationController = {
  createOrganisation: organisationControllerCreateOrganisation,
  updateOrganisation: organisationControllerUpdateOrganisation,
  readOrganisation: organisationControllerReadOrganisation,
  deleteOrganisation: organisationControllerDeleteOrganisation,
};
