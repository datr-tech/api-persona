import { organisationTypeController } from '@app-ap/api/controllers/organisationTypeController';
import { organisationTypeValidationSchemaUpdateOrganisationType } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationTypeRouterUpdateOrganisationType = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationTypeValidationSchemaUpdateOrganisationType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationTypeId, ...payload } = matchedData(req);
      const updateStatus = await organisationTypeController.updateOrganisationType({
        organisationTypeId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
