import { organisationController } from '@app-ap/api/controllers/organisationController';
import { organisationValidationSchemaUpdateOrganisation } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRouterUpdateOrganisation = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationValidationSchemaUpdateOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationId, ...payload } = matchedData(req);
      const updateStatus = await organisationController.updateOrganisation({
        organisationId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
