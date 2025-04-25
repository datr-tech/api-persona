import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { organisationUserRouterCreateOrganisationUser } from './organisationUserRouterCreateOrganisationUser';
import { organisationUserRouterDeleteOrganisationUser } from './organisationUserRouterDeleteOrganisationUser';
import { organisationUserRouterReadOrganisationUser } from './organisationUserRouterReadOrganisationUser';
import { organisationUserRouterUpdateOrganisationUser } from './organisationUserRouterUpdateOrganisationUser';

export const organisationUserRouter = Router(options)
  .use('/', organisationUserRouterCreateOrganisationUser)
  .use('/:organisationUserId', organisationUserRouterDeleteOrganisationUser)
  .use('/:organisationUserId', organisationUserRouterReadOrganisationUser)
  .use('/:organisationUserId', organisationUserRouterUpdateOrganisationUser);
