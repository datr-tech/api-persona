import { userController } from '@app-ap/api/controllers/userController';
import { userValidationSchemaReadUser } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userRouterReadUser = Router(options).get(
  '/',
  checkSchema(<Schema>userValidationSchemaReadUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userId } = matchedData(req);
      const user = await userController.readUser({ userId });

      res.status(200).send({ user });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
