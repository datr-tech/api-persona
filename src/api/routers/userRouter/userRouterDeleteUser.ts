import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userValidationSchemaDeleteUser } from '@freight/persona-router-validation-schemas';
import { userController } from '@app/api/controllers/userController';

export const userRouterDeleteUser = Router(options).get(
  '/',
  checkSchema(<Schema>userValidationSchemaDeleteUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userId } = matchedData(req);
      const deleteResponse = await userController.deleteUser({ userId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
