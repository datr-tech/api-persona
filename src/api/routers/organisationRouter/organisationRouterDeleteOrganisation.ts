import { organisationController } from '@app-ap/api/controllers/organisationController';
import { organisationValidationSchemaDeleteOrganisation } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRouterDeleteOrganisation = Router(options).get(
  '/',
  checkSchema(<Schema>organisationValidationSchemaDeleteOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationId } = matchedData(req);
      const deleteResponse = await organisationController.deleteOrganisation({
        organisationId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
