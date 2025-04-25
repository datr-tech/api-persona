import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { organisationTypeRouterCreateOrganisationType } from './organisationTypeRouterCreateOrganisationType';
import { organisationTypeRouterDeleteOrganisationType } from './organisationTypeRouterDeleteOrganisationType';
import { organisationTypeRouterReadOrganisationType } from './organisationTypeRouterReadOrganisationType';
import { organisationTypeRouterUpdateOrganisationType } from './organisationTypeRouterUpdateOrganisationType';

export const organisationTypeRouter = Router(options)
  .use('/', organisationTypeRouterCreateOrganisationType)
  .use('/:organisationTypeId', organisationTypeRouterDeleteOrganisationType)
  .use('/:organisationTypeId', organisationTypeRouterReadOrganisationType)
  .use('/:organisationTypeId', organisationTypeRouterUpdateOrganisationType);
