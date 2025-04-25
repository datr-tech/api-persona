import { userTypeController } from '@app-ap/api/controllers/userTypeController';
import { userTypeValidationSchemaReadUserType } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userTypeRouterReadUserType = Router(options).get(
  '/',
  checkSchema(<Schema>userTypeValidationSchemaReadUserType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { userTypeId } = matchedData(req);
      const userType = await userTypeController.readUserType({ userTypeId });

      res.status(200).send({ userType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
