import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { userRouterCreateUser } from './userRouterCreateUser';
import { userRouterDeleteUser } from './userRouterDeleteUser';
import { userRouterReadUser } from './userRouterReadUser';
import { userRouterUpdateUser } from './userRouterUpdateUser';

export const userRouter = Router(options)
  .use('/', userRouterCreateUser)
  .use('/:userId', userRouterDeleteUser)
  .use('/:userId', userRouterReadUser)
  .use('/:userId', userRouterUpdateUser);
