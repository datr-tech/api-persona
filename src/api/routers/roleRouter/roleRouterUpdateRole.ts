import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { roleValidationSchemaUpdateRole } from '@freight/persona-router-validation-schemas';
import { roleController } from '@app/api/controllers/roleController';

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
