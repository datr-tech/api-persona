import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { organisationRoleRouterCreateOrganisationRole } from './organisationRoleRouterCreateOrganisationRole';
import { organisationRoleRouterDeleteOrganisationRole } from './organisationRoleRouterDeleteOrganisationRole';
import { organisationRoleRouterReadOrganisationRole } from './organisationRoleRouterReadOrganisationRole';
import { organisationRoleRouterUpdateOrganisationRole } from './organisationRoleRouterUpdateOrganisationRole';

export const organisationRoleRouter = Router(options)
  .use('/', organisationRoleRouterCreateOrganisationRole)
  .use('/:organisationRoleId', organisationRoleRouterDeleteOrganisationRole)
  .use('/:organisationRoleId', organisationRoleRouterReadOrganisationRole)
  .use('/:organisationRoleId', organisationRoleRouterUpdateOrganisationRole);
