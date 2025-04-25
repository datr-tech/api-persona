import { organisationRoleController } from '@app-ap/api/controllers/organisationRoleController';
import { organisationRoleValidationSchemaReadOrganisationRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRoleRouterReadOrganisationRole = Router(options).get(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaReadOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationRoleId } = matchedData(req);
      const organisationRole = await organisationRoleController.readOrganisationRole({
        organisationRoleId,
      });

      res.status(200).send({ organisationRole });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
