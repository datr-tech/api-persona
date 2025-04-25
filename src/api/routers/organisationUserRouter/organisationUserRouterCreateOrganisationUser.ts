import { organisationUserController } from '@app-ap/api/controllers/organisationUserController';
import { IOrganisationUserModel } from '@app-ap/interfaces/api/models/IOrganisationUserModel';
import { organisationUserValidationSchemaCreateOrganisationUser } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationUserRouterCreateOrganisationUser = Router(options).post(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaCreateOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationUserModel>(req);
      const organisationUserId =
        await organisationUserController.createOrganisationUser(validatedParams);

      res.status(201).send({ organisationUserId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
