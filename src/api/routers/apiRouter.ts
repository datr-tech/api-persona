import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { organisationRoleRouter } from './organisationRoleRouter';
import { organisationRouter } from './organisationRouter';
import { organisationTypeRouter } from './organisationTypeRouter';
import { organisationUserRouter } from './organisationUserRouter';
import { roleRouter } from './roleRouter';
import { userRouter } from './userRouter';
import { userSessionRouter } from './userSessionRouter';
import { userTypeRouter } from './userTypeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/organisation', organisationRouter)
  .use('/api/v1/organisationRole', organisationRoleRouter)
  .use('/api/v1/organisationType', organisationTypeRouter)
  .use('/api/v1/organisationUser', organisationUserRouter)
  .use('/api/v1/role', roleRouter)
  .use('/api/v1/user', userRouter)
  .use('/api/v1/userSession', userSessionRouter)
  .use('/api/v1/userType', userTypeRouter);
