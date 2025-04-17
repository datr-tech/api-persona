import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationTypeValidationSchemaReadOrganisationType } from '@freight/persona-router-validation-schemas';
import { organisationTypeController } from '@app/api/controllers/organisationTypeController';

export const organisationTypeRouterReadOrganisationType = Router(options).get(
  '/',
  checkSchema(<Schema>organisationTypeValidationSchemaReadOrganisationType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationTypeId } = matchedData(req);
      const organisationType = await organisationTypeController.readOrganisationType({ organisationTypeId });

      res.status(200).send({ organisationType });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
