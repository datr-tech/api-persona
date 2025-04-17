import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationTypeValidationSchemaUpdateOrganisationType } from '@freight/persona-router-validation-schemas';
import { organisationTypeController } from '@app/api/controllers/organisationTypeController';

export const organisationTypeRouterUpdateOrganisationType = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationTypeValidationSchemaUpdateOrganisationType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationTypeId, ...payload } = matchedData(req);
      const updateStatus = await organisationTypeController.updateOrganisationType({ organisationTypeId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
