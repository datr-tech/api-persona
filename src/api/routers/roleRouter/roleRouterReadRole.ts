import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { roleValidationSchemaReadRole } from '@freight/persona-router-validation-schemas';
import { roleController } from '@app/api/controllers/roleController';

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
