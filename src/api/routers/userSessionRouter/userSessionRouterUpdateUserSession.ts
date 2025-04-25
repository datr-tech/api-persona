import { userSessionController } from '@app-ap/api/controllers/userSessionController';
import { userSessionValidationSchemaUpdateUserSession } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userSessionRouterUpdateUserSession = Router(options).patch(
  '/',
  checkSchema(<Schema>userSessionValidationSchemaUpdateUserSession),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userSessionId, ...payload } = matchedData(req);
      const updateStatus = await userSessionController.updateUserSession({
        userSessionId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
