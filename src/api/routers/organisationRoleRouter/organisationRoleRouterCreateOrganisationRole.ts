import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationRoleValidationSchemaCreateOrganisationRole } from '@freight/persona-router-validation-schemas';
import { organisationRoleController } from '@app/api/controllers/organisationRoleController';
import { IOrganisationRoleModel } from '@app/interfaces/api/models/IOrganisationRoleModel';

export const organisationRoleRouterCreateOrganisationRole = Router(options).post(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaCreateOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationRoleModel>(req);
      const organisationRoleId = await organisationRoleController.createOrganisationRole(validatedParams);

      res.status(201).send({ organisationRoleId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
