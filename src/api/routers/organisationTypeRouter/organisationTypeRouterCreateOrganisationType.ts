import { organisationTypeController } from '@app-ap/api/controllers/organisationTypeController';
import { IOrganisationTypeModel } from '@app-ap/interfaces/api/models/IOrganisationTypeModel';
import { organisationTypeValidationSchemaCreateOrganisationType } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationTypeRouterCreateOrganisationType = Router(options).post(
  '/',
  checkSchema(<Schema>organisationTypeValidationSchemaCreateOrganisationType),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const validatedParams = matchedData<IOrganisationTypeModel>(req);
      const organisationTypeId =
        await organisationTypeController.createOrganisationType(validatedParams);

      res.status(201).send({ organisationTypeId });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
