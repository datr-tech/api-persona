import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userTypeValidationSchemaUpdateUserType } from '@freight/persona-router-validation-schemas';
import { userTypeController } from '@app/api/controllers/userTypeController';

export const userTypeRouterUpdateUserType = Router(options).patch(
  '/',
  checkSchema(<Schema>userTypeValidationSchemaUpdateUserType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userTypeId, ...payload } = matchedData(req);
      const updateStatus = await userTypeController.updateUserType({ userTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
