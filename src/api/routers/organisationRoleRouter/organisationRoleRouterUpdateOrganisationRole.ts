import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationRoleValidationSchemaUpdateOrganisationRole } from '@freight/persona-router-validation-schemas';
import { organisationRoleController } from '@app/api/controllers/organisationRoleController';

export const organisationRoleRouterUpdateOrganisationRole = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaUpdateOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationRoleId, ...payload } = matchedData(req);
      const updateStatus = await organisationRoleController.updateOrganisationRole({ organisationRoleId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
