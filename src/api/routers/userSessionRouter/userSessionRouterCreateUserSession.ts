import { userSessionController } from '@app-ap/api/controllers/userSessionController';
import { IUserSessionModel } from '@app-ap/interfaces/api/models/IUserSessionModel';
import { userSessionValidationSchemaCreateUserSession } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userSessionRouterCreateUserSession = Router(options).post(
  '/',
  checkSchema(<Schema>userSessionValidationSchemaCreateUserSession),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IUserSessionModel>(req);
      const userSessionId =
        await userSessionController.createUserSession(validatedParams);

      res.status(201).send({ userSessionId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
