import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { roleValidationSchemaCreateRole } from '@freight/persona-router-validation-schemas';
import { roleController } from '@app/api/controllers/roleController';
import { IRoleModel } from '@app/interfaces/api/models/IRoleModel';

export const roleRouterCreateRole = Router(options).post(
  '/',
  checkSchema(<Schema>roleValidationSchemaCreateRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IRoleModel>(req);
      const roleId = await roleController.createRole(validatedParams);

      res.status(201).send({ roleId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
