import { userController } from '@app-ap/api/controllers/userController';
import { IUserModel } from '@app-ap/interfaces/api/models/IUserModel';
import { userValidationSchemaCreateUser } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userRouterCreateUser = Router(options).post(
  '/',
  checkSchema(<Schema>userValidationSchemaCreateUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IUserModel>(req);
      const userId = await userController.createUser(validatedParams);

      res.status(201).send({ userId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
