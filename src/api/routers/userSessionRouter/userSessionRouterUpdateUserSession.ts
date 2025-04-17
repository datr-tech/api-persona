import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userSessionValidationSchemaUpdateUserSession } from '@freight/persona-router-validation-schemas';
import { userSessionController } from '@app/api/controllers/userSessionController';

export const userSessionRouterUpdateUserSession = Router(options).patch(
  '/',
  checkSchema(<Schema>userSessionValidationSchemaUpdateUserSession),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userSessionId, ...payload } = matchedData(req);
      const updateStatus = await userSessionController.updateUserSession({ userSessionId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
