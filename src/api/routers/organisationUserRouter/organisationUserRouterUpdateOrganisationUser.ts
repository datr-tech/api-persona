import { organisationUserController } from '@app-ap/api/controllers/organisationUserController';
import { organisationUserValidationSchemaUpdateOrganisationUser } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

export const organisationUserRouterUpdateOrganisationUser = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaUpdateOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationUserId, ...payload } = matchedData(req);
      const updateStatus = await organisationUserController.updateOrganisationUser({
        organisationUserId,
        payload,
      });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
