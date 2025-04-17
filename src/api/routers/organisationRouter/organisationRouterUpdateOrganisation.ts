import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationValidationSchemaUpdateOrganisation } from '@freight/persona-router-validation-schemas';
import { organisationController } from '@app/api/controllers/organisationController';

export const organisationRouterUpdateOrganisation = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationValidationSchemaUpdateOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationId, ...payload } = matchedData(req);
      const updateStatus = await organisationController.updateOrganisation({ organisationId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
