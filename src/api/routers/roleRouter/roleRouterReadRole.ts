import { roleController } from '@app-ap/api/controllers/roleController';
import { roleValidationSchemaReadRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const roleRouterReadRole = Router(options).get(
  '/',
  checkSchema(<Schema>roleValidationSchemaReadRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { roleId } = matchedData(req);
      const role = await roleController.readRole({ roleId });

      res.status(200).send({ role });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
