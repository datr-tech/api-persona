import { organisationRoleController } from '@app-ap/api/controllers/organisationRoleController';
import { organisationRoleValidationSchemaUpdateOrganisationRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRoleRouterUpdateOrganisationRole = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaUpdateOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationRoleId, ...payload } = matchedData(req);
      const updateStatus = await organisationRoleController.updateOrganisationRole({
        organisationRoleId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
