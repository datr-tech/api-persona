import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationUserValidationSchemaCreateOrganisationUser } from '@freight/persona-router-validation-schemas';
import { organisationUserController } from '@app/api/controllers/organisationUserController';
import { IOrganisationUserModel } from '@app/interfaces/api/models/IOrganisationUserModel';

export const organisationUserRouterCreateOrganisationUser = Router(options).post(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaCreateOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationUserModel>(req);
      const organisationUserId = await organisationUserController.createOrganisationUser(validatedParams);

      res.status(201).send({ organisationUserId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
