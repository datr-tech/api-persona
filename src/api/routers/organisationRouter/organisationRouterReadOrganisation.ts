import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationValidationSchemaReadOrganisation } from '@freight/persona-router-validation-schemas';
import { organisationController } from '@app/api/controllers/organisationController';

export const organisationRouterReadOrganisation = Router(options).get(
  '/',
  checkSchema(<Schema>organisationValidationSchemaReadOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationId } = matchedData(req);
      const organisation = await organisationController.readOrganisation({ organisationId });

      res.status(200).send({ organisation });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
