import { app } from '@app-ap/api';
import { apiName, apiPort } from '@app-ap/config';
import { logger } from '@datr.tech/leith-common-logger';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`${apiName} listening on ${apiPort}`);

  (async () => {
    //await db.connect();
  })();
});
