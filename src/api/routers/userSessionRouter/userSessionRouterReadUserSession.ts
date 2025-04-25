import { userSessionController } from '@app-ap/api/controllers/userSessionController';
import { userSessionValidationSchemaReadUserSession } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userSessionRouterReadUserSession = Router(options).get(
  '/',
  checkSchema(<Schema>userSessionValidationSchemaReadUserSession),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userSessionId } = matchedData(req);
      const userSession = await userSessionController.readUserSession({ userSessionId });

      res.status(200).send({ userSession });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
