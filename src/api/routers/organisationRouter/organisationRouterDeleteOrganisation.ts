import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationValidationSchemaDeleteOrganisation } from '@freight/persona-router-validation-schemas';
import { organisationController } from '@app/api/controllers/organisationController';

export const organisationRouterDeleteOrganisation = Router(options).get(
  '/',
  checkSchema(<Schema>organisationValidationSchemaDeleteOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationId } = matchedData(req);
      const deleteResponse = await organisationController.deleteOrganisation({ organisationId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
