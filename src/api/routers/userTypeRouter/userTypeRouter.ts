import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { userTypeRouterCreateUserType } from './userTypeRouterCreateUserType';
import { userTypeRouterDeleteUserType } from './userTypeRouterDeleteUserType';
import { userTypeRouterReadUserType } from './userTypeRouterReadUserType';
import { userTypeRouterUpdateUserType } from './userTypeRouterUpdateUserType';

export const userTypeRouter = Router(options)
  .use('/', userTypeRouterCreateUserType)
  .use('/:userTypeId', userTypeRouterDeleteUserType)
  .use('/:userTypeId', userTypeRouterReadUserType)
  .use('/:userTypeId', userTypeRouterUpdateUserType);
