import { organisationTypeController } from '@app-ap/api/controllers/organisationTypeController';
import { organisationTypeValidationSchemaDeleteOrganisationType } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationTypeRouterDeleteOrganisationType = Router(options).get(
  '/',
  checkSchema(<Schema>organisationTypeValidationSchemaDeleteOrganisationType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationTypeId } = matchedData(req);
      const deleteResponse = await organisationTypeController.deleteOrganisationType({
        organisationTypeId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
