import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { organisationRouterCreateOrganisation } from './organisationRouterCreateOrganisation';
import { organisationRouterDeleteOrganisation } from './organisationRouterDeleteOrganisation';
import { organisationRouterReadOrganisation } from './organisationRouterReadOrganisation';
import { organisationRouterUpdateOrganisation } from './organisationRouterUpdateOrganisation';

export const organisationRouter = Router(options)
  .use('/', organisationRouterCreateOrganisation)
  .use('/:organisationId', organisationRouterDeleteOrganisation)
  .use('/:organisationId', organisationRouterReadOrganisation)
  .use('/:organisationId', organisationRouterUpdateOrganisation);
