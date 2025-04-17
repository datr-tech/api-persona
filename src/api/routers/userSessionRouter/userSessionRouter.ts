import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { userSessionRouterCreateUserSession } from './userSessionRouterCreateUserSession';
import { userSessionRouterDeleteUserSession } from './userSessionRouterDeleteUserSession';
import { userSessionRouterReadUserSession } from './userSessionRouterReadUserSession';
import { userSessionRouterUpdateUserSession } from './userSessionRouterUpdateUserSession';

export const userSessionRouter = Router(options)
  .use('/', userSessionRouterCreateUserSession)
  .use('/:userSessionId', userSessionRouterDeleteUserSession)
  .use('/:userSessionId', userSessionRouterReadUserSession)
  .use('/:userSessionId', userSessionRouterUpdateUserSession);
