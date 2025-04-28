import { organisationTypeControllerCreateOrganisationType } from './organisationTypeControllerCreateOrganisationType';
import { organisationTypeControllerDeleteOrganisationType } from './organisationTypeControllerDeleteOrganisationType';
import { organisationTypeControllerReadOrganisationType } from './organisationTypeControllerReadOrganisationType';
import { organisationTypeControllerUpdateOrganisationType } from './organisationTypeControllerUpdateOrganisationType';

export const organisationTypeController = {
  createOrganisationType: organisationTypeControllerCreateOrganisationType,
  updateOrganisationType: organisationTypeControllerUpdateOrganisationType,
  readOrganisationType: organisationTypeControllerReadOrganisationType,
  deleteOrganisationType: organisationTypeControllerDeleteOrganisationType,
};
