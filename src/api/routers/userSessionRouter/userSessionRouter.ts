import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { userSessionRouterCreateUserSession } from './userSessionRouterCreateUserSession';
import { userSessionRouterDeleteUserSession } from './userSessionRouterDeleteUserSession';
import { userSessionRouterReadUserSession } from './userSessionRouterReadUserSession';
import { userSessionRouterUpdateUserSession } from './userSessionRouterUpdateUserSession';

export const userSessionRouter = Router(options)
  .use('/', userSessionRouterCreateUserSession)
  .use('/:userSessionId', userSessionRouterDeleteUserSession)
  .use('/:userSessionId', userSessionRouterReadUserSession)
  .use('/:userSessionId', userSessionRouterUpdateUserSession);
