import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { roleValidationSchemaDeleteRole } from '@freight/persona-router-validation-schemas';
import { roleController } from '@app/api/controllers/roleController';

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
