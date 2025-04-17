import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userSessionValidationSchemaCreateUserSession } from '@freight/persona-router-validation-schemas';
import { userSessionController } from '@app/api/controllers/userSessionController';
import { IUserSessionModel } from '@app/interfaces/api/models/IUserSessionModel';

export const userSessionRouterCreateUserSession = Router(options).post(
  '/',
  checkSchema(<Schema>userSessionValidationSchemaCreateUserSession),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IUserSessionModel>(req);
      const userSessionId = await userSessionController.createUserSession(validatedParams);

      res.status(201).send({ userSessionId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
