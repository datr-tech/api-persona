import { roleController } from '@app-ap/api/controllers/roleController';
import { IRoleModel } from '@app-ap/interfaces/api/models/IRoleModel';
import { roleValidationSchemaCreateRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

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
