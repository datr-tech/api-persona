import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationUserValidationSchemaUpdateOrganisationUser } from '@freight/persona-router-validation-schemas';
import { organisationUserController } from '@app/api/controllers/organisationUserController';

export const organisationUserRouterUpdateOrganisationUser = Router(options).patch(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaUpdateOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationUserId, ...payload } = matchedData(req);
      const updateStatus = await organisationUserController.updateOrganisationUser({ organisationUserId, payload });

      res.status(200).send({ updateStatus });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
