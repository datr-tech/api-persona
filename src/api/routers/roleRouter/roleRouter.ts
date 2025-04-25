import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { roleRouterCreateRole } from './roleRouterCreateRole';
import { roleRouterDeleteRole } from './roleRouterDeleteRole';
import { roleRouterReadRole } from './roleRouterReadRole';
import { roleRouterUpdateRole } from './roleRouterUpdateRole';

export const roleRouter = Router(options)
  .use('/', roleRouterCreateRole)
  .use('/:roleId', roleRouterDeleteRole)
  .use('/:roleId', roleRouterReadRole)
  .use('/:roleId', roleRouterUpdateRole);
