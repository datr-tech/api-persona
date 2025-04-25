import { organisationController } from '@app-ap/api/controllers/organisationController';
import { IOrganisationModel } from '@app-ap/interfaces/api/models/IOrganisationModel';
import { organisationValidationSchemaCreateOrganisation } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationRouterCreateOrganisation = Router(options).post(
  '/',
  checkSchema(<Schema>organisationValidationSchemaCreateOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationModel>(req);
      const organisationId =
        await organisationController.createOrganisation(validatedParams);

      res.status(201).send({ organisationId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
