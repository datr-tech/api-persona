import { userSessionController } from '@app-ap/api/controllers/userSessionController';
import { userSessionValidationSchemaDeleteUserSession } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userSessionRouterDeleteUserSession = Router(options).get(
  '/',
  checkSchema(<Schema>userSessionValidationSchemaDeleteUserSession),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userSessionId } = matchedData(req);
      const deleteResponse = await userSessionController.deleteUserSession({
        userSessionId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
