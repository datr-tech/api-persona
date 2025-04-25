import { organisationController } from '@app-ap/api/controllers/organisationController';
import { organisationValidationSchemaReadOrganisation } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRouterReadOrganisation = Router(options).get(
  '/',
  checkSchema(<Schema>organisationValidationSchemaReadOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationId } = matchedData(req);
      const organisation = await organisationController.readOrganisation({
        organisationId,
      });

      res.status(200).send({ organisation });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
