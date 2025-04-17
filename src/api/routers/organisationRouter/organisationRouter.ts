import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { organisationRouterCreateOrganisation } from './organisationRouterCreateOrganisation';
import { organisationRouterDeleteOrganisation } from './organisationRouterDeleteOrganisation';
import { organisationRouterReadOrganisation } from './organisationRouterReadOrganisation';
import { organisationRouterUpdateOrganisation } from './organisationRouterUpdateOrganisation';

export const organisationRouter = Router(options)
  .use('/', organisationRouterCreateOrganisation)
  .use('/:organisationId', organisationRouterDeleteOrganisation)
  .use('/:organisationId', organisationRouterReadOrganisation)
  .use('/:organisationId', organisationRouterUpdateOrganisation);
