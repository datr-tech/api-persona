import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userSessionValidationSchemaDeleteUserSession } from '@freight/persona-router-validation-schemas';
import { userSessionController } from '@app/api/controllers/userSessionController';

export const userSessionRouterDeleteUserSession = Router(options).get(
  '/',
  checkSchema(<Schema>userSessionValidationSchemaDeleteUserSession),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userSessionId } = matchedData(req);
      const deleteResponse = await userSessionController.deleteUserSession({ userSessionId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
