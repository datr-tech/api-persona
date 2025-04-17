import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { organisationUserRouterCreateOrganisationUser } from './organisationUserRouterCreateOrganisationUser';
import { organisationUserRouterDeleteOrganisationUser } from './organisationUserRouterDeleteOrganisationUser';
import { organisationUserRouterReadOrganisationUser } from './organisationUserRouterReadOrganisationUser';
import { organisationUserRouterUpdateOrganisationUser } from './organisationUserRouterUpdateOrganisationUser';

export const organisationUserRouter = Router(options)
  .use('/', organisationUserRouterCreateOrganisationUser)
  .use('/:organisationUserId', organisationUserRouterDeleteOrganisationUser)
  .use('/:organisationUserId', organisationUserRouterReadOrganisationUser)
  .use('/:organisationUserId', organisationUserRouterUpdateOrganisationUser);
