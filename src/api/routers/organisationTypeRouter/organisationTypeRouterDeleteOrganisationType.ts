import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationTypeValidationSchemaDeleteOrganisationType } from '@freight/persona-router-validation-schemas';
import { organisationTypeController } from '@app/api/controllers/organisationTypeController';

export const organisationTypeRouterDeleteOrganisationType = Router(options).get(
  '/',
  checkSchema(<Schema>organisationTypeValidationSchemaDeleteOrganisationType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationTypeId } = matchedData(req);
      const deleteResponse = await organisationTypeController.deleteOrganisationType({ organisationTypeId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
