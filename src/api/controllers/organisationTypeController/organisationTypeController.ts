import { organisationTypeControllerCreateOrganisationType } from './organisationTypeControllerCreateOrganisationType';
import { organisationTypeControllerUpdateOrganisationType } from './organisationTypeControllerUpdateOrganisationType';
import { organisationTypeControllerReadOrganisationType } from './organisationTypeControllerReadOrganisationType';
import { organisationTypeControllerDeleteOrganisationType } from './organisationTypeControllerDeleteOrganisationType';

export const organisationTypeController = {
  createOrganisationType: organisationTypeControllerCreateOrganisationType,
  updateOrganisationType: organisationTypeControllerUpdateOrganisationType,
  readOrganisationType: organisationTypeControllerReadOrganisationType,
  deleteOrganisationType: organisationTypeControllerDeleteOrganisationType,
};
