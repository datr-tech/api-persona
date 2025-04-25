import { userTypeController } from '@app-ap/api/controllers/userTypeController';
import { IUserTypeModel } from '@app-ap/interfaces/api/models/IUserTypeModel';
import { userTypeValidationSchemaCreateUserType } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const userTypeRouterCreateUserType = Router(options).post(
  '/',
  checkSchema(<Schema>userTypeValidationSchemaCreateUserType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IUserTypeModel>(req);
      const userTypeId = await userTypeController.createUserType(validatedParams);

      res.status(201).send({ userTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
