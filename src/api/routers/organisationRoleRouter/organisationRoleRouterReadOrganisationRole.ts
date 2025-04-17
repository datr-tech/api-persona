import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationRoleValidationSchemaReadOrganisationRole } from '@freight/persona-router-validation-schemas';
import { organisationRoleController } from '@app/api/controllers/organisationRoleController';

export const organisationRoleRouterReadOrganisationRole = Router(options).get(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaReadOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationRoleId } = matchedData(req);
      const organisationRole = await organisationRoleController.readOrganisationRole({ organisationRoleId });

      res.status(200).send({ organisationRole });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
