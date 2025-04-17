import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userSessionValidationSchemaReadUserSession } from '@freight/persona-router-validation-schemas';
import { userSessionController } from '@app/api/controllers/userSessionController';

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
