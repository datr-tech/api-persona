import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationUserValidationSchemaReadOrganisationUser } from '@freight/persona-router-validation-schemas';
import { organisationUserController } from '@app/api/controllers/organisationUserController';

export const organisationUserRouterReadOrganisationUser = Router(options).get(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaReadOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationUserId } = matchedData(req);
      const organisationUser = await organisationUserController.readOrganisationUser({ organisationUserId });

      res.status(200).send({ organisationUser });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
