import { userTypeController } from '@app-ap/api/controllers/userTypeController';
import { userTypeValidationSchemaUpdateUserType } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userTypeRouterUpdateUserType = Router(options).patch(
  '/',
  checkSchema(<Schema>userTypeValidationSchemaUpdateUserType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userTypeId, ...payload } = matchedData(req);
      const updateStatus = await userTypeController.updateUserType({
        userTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
