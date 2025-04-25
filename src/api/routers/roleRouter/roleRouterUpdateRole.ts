import { roleController } from '@app-ap/api/controllers/roleController';
import { roleValidationSchemaUpdateRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const roleRouterUpdateRole = Router(options).patch(
  '/',
  checkSchema(<Schema>roleValidationSchemaUpdateRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { roleId, ...payload } = matchedData(req);
      const updateStatus = await roleController.updateRole({ roleId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
