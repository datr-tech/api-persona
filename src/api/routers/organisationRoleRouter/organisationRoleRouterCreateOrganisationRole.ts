import { organisationRoleController } from '@app-ap/api/controllers/organisationRoleController';
import { IOrganisationRoleModel } from '@app-ap/interfaces/api/models/IOrganisationRoleModel';
import { organisationRoleValidationSchemaCreateOrganisationRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRoleRouterCreateOrganisationRole = Router(options).post(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaCreateOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationRoleModel>(req);
      const organisationRoleId =
        await organisationRoleController.createOrganisationRole(validatedParams);

      res.status(201).send({ organisationRoleId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
