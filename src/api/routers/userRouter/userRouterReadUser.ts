import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userValidationSchemaReadUser } from '@freight/persona-router-validation-schemas';
import { userController } from '@app/api/controllers/userController';

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
