import { Request, Response, Router } from 'express';
import { checkExact, checkSchema, matchedData, Schema, validationResult } from 'express-validator';
import { options } from '@freight/common-router-options';
import { organisationUserValidationSchemaDeleteOrganisationUser } from '@freight/persona-router-validation-schemas';
import { organisationUserController } from '@app/api/controllers/organisationUserController';

export const organisationUserRouterDeleteOrganisationUser = Router(options).get(
  '/',
  checkSchema(<Schema>organisationUserValidationSchemaDeleteOrganisationUser),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { organisationUserId } = matchedData(req);
      const deleteResponse = await organisationUserController.deleteOrganisationUser({ organisationUserId });

      res.status(200).send({ deleteResponse });
    } else {
      res.status(404).send({ error: errors.array() });
    }
  },
);
