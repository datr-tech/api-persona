import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { organisationRoleRouterCreateOrganisationRole } from './organisationRoleRouterCreateOrganisationRole';
import { organisationRoleRouterDeleteOrganisationRole } from './organisationRoleRouterDeleteOrganisationRole';
import { organisationRoleRouterReadOrganisationRole } from './organisationRoleRouterReadOrganisationRole';
import { organisationRoleRouterUpdateOrganisationRole } from './organisationRoleRouterUpdateOrganisationRole';

export const organisationRoleRouter = Router(options)
  .use('/', organisationRoleRouterCreateOrganisationRole)
  .use('/:organisationRoleId', organisationRoleRouterDeleteOrganisationRole)
  .use('/:organisationRoleId', organisationRoleRouterReadOrganisationRole)
  .use('/:organisationRoleId', organisationRoleRouterUpdateOrganisationRole);
