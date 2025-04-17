import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationTypeValidationSchemaCreateOrganisationType } from '@freight/persona-router-validation-schemas';
import { organisationTypeController } from '@app/api/controllers/organisationTypeController';
import { IOrganisationTypeModel } from '@app/interfaces/api/models/IOrganisationTypeModel';

export const organisationTypeRouterCreateOrganisationType = Router(options).post(
  '/',
  checkSchema(<Schema>organisationTypeValidationSchemaCreateOrganisationType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationTypeModel>(req);
      const organisationTypeId = await organisationTypeController.createOrganisationType(validatedParams);

      res.status(201).send({ organisationTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
