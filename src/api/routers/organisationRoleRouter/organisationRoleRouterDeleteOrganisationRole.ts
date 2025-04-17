import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationRoleValidationSchemaDeleteOrganisationRole } from '@freight/persona-router-validation-schemas';
import { organisationRoleController } from '@app/api/controllers/organisationRoleController';

export const organisationRoleRouterDeleteOrganisationRole = Router(options).get(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaDeleteOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationRoleId } = matchedData(req);
      const deleteResponse = await organisationRoleController.deleteOrganisationRole({ organisationRoleId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
