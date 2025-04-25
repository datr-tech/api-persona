import { userTypeController } from '@app-ap/api/controllers/userTypeController';
import { userTypeValidationSchemaDeleteUserType } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userTypeRouterDeleteUserType = Router(options).get(
  '/',
  checkSchema(<Schema>userTypeValidationSchemaDeleteUserType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userTypeId } = matchedData(req);
      const deleteResponse = await userTypeController.deleteUserType({ userTypeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
