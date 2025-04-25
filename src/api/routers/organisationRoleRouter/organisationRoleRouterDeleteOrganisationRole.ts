import { organisationRoleController } from '@app-ap/api/controllers/organisationRoleController';
import { organisationRoleValidationSchemaDeleteOrganisationRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRoleRouterDeleteOrganisationRole = Router(options).get(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaDeleteOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationRoleId } = matchedData(req);
      const deleteResponse = await organisationRoleController.deleteOrganisationRole({
        organisationRoleId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
