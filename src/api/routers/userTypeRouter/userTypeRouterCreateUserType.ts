import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { userTypeValidationSchemaCreateUserType } from '@freight/persona-router-validation-schemas';
import { userTypeController } from '@app/api/controllers/userTypeController';
import { IUserTypeModel } from '@app/interfaces/api/models/IUserTypeModel';

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
