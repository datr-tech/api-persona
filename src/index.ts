import 'dotenv/config';

import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { personaSeeder } from '@datr.tech/leith-common-seeders';

import { app } from '@app-ap/api';
import {
  OrganisationModel,
  OrganisationRoleModel,
  OrganisationTypeModel,
  OrganisationUserModel,
  RoleModel,
  UserModel,
  UserSessionModel,
  UserTypeModel,
} from '@app-ap/api/models';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-ap/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);

  (async () => {
    const stat = await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });

    const { isConnected } = stat;

    if (isConnected) {
      await personaSeeder(
        OrganisationModel,
        OrganisationRoleModel,
        OrganisationTypeModel,
        OrganisationUserModel,
        RoleModel,
        UserModel,
        UserSessionModel,
        UserTypeModel,
      );
    }
  })();
});
