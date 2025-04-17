import { organisationControllerCreateOrganisation } from './organisationControllerCreateOrganisation';
import { organisationControllerUpdateOrganisation } from './organisationControllerUpdateOrganisation';
import { organisationControllerReadOrganisation } from './organisationControllerReadOrganisation';
import { organisationControllerDeleteOrganisation } from './organisationControllerDeleteOrganisation';

export const organisationController = {
  createOrganisation: organisationControllerCreateOrganisation,
  updateOrganisation: organisationControllerUpdateOrganisation,
  readOrganisation: organisationControllerReadOrganisation,
  deleteOrganisation: organisationControllerDeleteOrganisation,
};
