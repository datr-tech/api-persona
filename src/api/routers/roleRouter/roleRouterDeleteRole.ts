import { roleController } from '@app-ap/api/controllers/roleController';
import { roleValidationSchemaDeleteRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const roleRouterDeleteRole = Router(options).get(
  '/',
  checkSchema(<Schema>roleValidationSchemaDeleteRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { roleId } = matchedData(req);
      const deleteResponse = await roleController.deleteRole({ roleId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
