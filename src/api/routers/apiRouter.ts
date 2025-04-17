import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { organisationRouter } from './organisationRouter';
import { organisationRoleRouter } from './organisationRoleRouter';
import { organisationTypeRouter } from './organisationTypeRouter';
import { organisationUserRouter } from './organisationUserRouter';
import { roleRouter } from './roleRouter';
import { userRouter } from './userRouter';
import { userSessionRouter } from './userSessionRouter';
import { userTypeRouter } from './userTypeRouter';

export const apiRouter = Router(options)
  .use('/api/v1/organisationRouter', organisationRouter)
  .use('/api/v1/organisationRoleRouter', organisationRoleRouter)
  .use('/api/v1/organisationTypeRouter', organisationTypeRouter)
  .use('/api/v1/organisationUserRouter', organisationUserRouter)
  .use('/api/v1/roleRouter', roleRouter)
  .use('/api/v1/userRouter', userRouter)
  .use('/api/v1/userSessionRouter', userSessionRouter)
  .use('/api/v1/userTypeRouter', userTypeRouter);
