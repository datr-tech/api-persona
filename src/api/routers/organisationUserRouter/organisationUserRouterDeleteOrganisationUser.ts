import { organisationUserController } from '@app-ap/api/controllers/organisationUserController';
import { organisationUserValidationSchemaDeleteOrganisationUser } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationUserRouterDeleteOrganisationUser = Router(options).get(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaDeleteOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationUserId } = matchedData(req);
      const deleteResponse = await organisationUserController.deleteOrganisationUser({
        organisationUserId,
      });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
