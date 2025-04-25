import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { userTypeRouterCreateUserType } from './userTypeRouterCreateUserType';
import { userTypeRouterDeleteUserType } from './userTypeRouterDeleteUserType';
import { userTypeRouterReadUserType } from './userTypeRouterReadUserType';
import { userTypeRouterUpdateUserType } from './userTypeRouterUpdateUserType';

export const userTypeRouter = Router(options)
  .use('/', userTypeRouterCreateUserType)
  .use('/:userTypeId', userTypeRouterDeleteUserType)
  .use('/:userTypeId', userTypeRouterReadUserType)
  .use('/:userTypeId', userTypeRouterUpdateUserType);
