import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationValidationSchemaCreateOrganisation } from '@freight/persona-router-validation-schemas';
import { organisationController } from '@app/api/controllers/organisationController';
import { IOrganisationModel } from '@app/interfaces/api/models/IOrganisationModel';

export const organisationRouterCreateOrganisation = Router(options).post(
  '/',
  checkSchema(<Schema>organisationValidationSchemaCreateOrganisation),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationModel>(req);
      const organisationId = await organisationController.createOrganisation(validatedParams);

      res.status(201).send({ organisationId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
