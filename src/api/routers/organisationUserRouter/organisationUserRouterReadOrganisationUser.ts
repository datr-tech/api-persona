import { organisationUserController } from '@app-ap/api/controllers/organisationUserController';
import { organisationUserValidationSchemaReadOrganisationUser } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationUserRouterReadOrganisationUser = Router(options).get(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaReadOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationUserId } = matchedData(req);
      const organisationUser = await organisationUserController.readOrganisationUser({
        organisationUserId,
      });

      res.status(200).send({ organisationUser });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
