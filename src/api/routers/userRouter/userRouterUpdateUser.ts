import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userValidationSchemaUpdateUser } from '@freight/persona-router-validation-schemas';
import { userController } from '@app/api/controllers/userController';

export const userRouterUpdateUser = Router(options).patch(
  '/',
  checkSchema(<Schema>userValidationSchemaUpdateUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userId, ...payload } = matchedData(req);
      const updateStatus = await userController.updateUser({ userId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
