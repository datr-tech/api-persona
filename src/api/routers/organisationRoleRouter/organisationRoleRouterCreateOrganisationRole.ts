import { organisationRoleController } from '@app-ap/api/controllers/organisationRoleController';
import {
  IOrganisationRoleControllerCreateOrganisationRoleOutputError as IControllerError,
  IOrganisationRoleControllerCreateOrganisationRoleOutputSuccess as IControllerSuccess,
} from '@app-ap/interfaces/api/controllers';
import { IOrganisationRoleModel } from '@app-ap/interfaces/api/models/IOrganisationRoleModel';
import { organisationRoleValidationSchemaCreateOrganisationRole } from '@datr.tech/cargo-router-validation-schemas-persona';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Request, Response, Router } from 'express';
import {
  checkExact,
  checkSchema,
  matchedData,
  Schema,
  validationResult,
} from 'express-validator';

/**
 * @name					organisationRoleRouterCreateOrganisationRole
 *
 * @description		The 'createOrganisationRole' router for 'organisationRole', whose expected
 *                inputs have been defined within the following schema:
 *                'organisationRoleValidationSchemaCreateOrganisationRole'.
 *
 *                The schema will be used by 'express-validator' to perform input validation.
 *                When the validation process succeeds, control will pass to the associated
 *                controller, 'organisationRoleController', which, when successful, will return
 *                a common status (or 'stat') object, whose 'payload' will contain
 *                'organisationRoleId'.
 *
 * @param					{Request}		req		The Express request.
 * @param         {Response}	res		The Express response.
 * @return				{undefined}
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 *
 * @see		        | Outcomes                    | HTTP status codes |
 *                | --------------------------- | ----------------- |
 *                | On success                  | 201               |
 *                | Router validation error     | 422               |
 *                | Controller validation error | 404               |
 *                | Server error                | 500               |
 */
export const organisationRoleRouterCreateOrganisationRole = Router(options).post(
  '/',
  checkSchema(<Schema>organisationRoleValidationSchemaCreateOrganisationRole),
  checkExact(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    try {
      /*
       * Handle validation errors
       * ------------------------
       *
       * Handle validation errors in relation to the fields
       * defined within 'organisationRoleValidationSchemaCreateOrganisationRole'.
       * Additionally, and because of the inclusion of 'checkExact()'
       * above, ONLY fields defined within the schema will be accepted.
       */
      if (!errors.isEmpty()) {
        res.status(422).send({ error: errors.array() });
      }

      /*
       * Pass the validated params to the controller
       * -------------------------------------------
       *
       * On validation success, retrieve the 'validatedParams' object
       * from the received 'req' (using 'matchedData') and pass them
       * to 'organisationRoleController'.
       */

      const validatedParams = matchedData<IOrganisationRoleModel>(req);
      const stat =
        await organisationRoleController.createOrganisationRole(validatedParams);

      /*
       * Handle controller errors
       * ------------------------
       *
       * If the common controller response object, 'stat', is not truthy, or if
       * 'stat.error' equals true, then handle the error returned by the controller.
       */
      if (!stat || stat.error) {
        const { message, responseStatusCode } = (stat as IControllerError).payload;
        res.status(responseStatusCode).send({ error: message });
      }

      /*
       * Handle successful controller responses
       * --------------------------------------
       *
       * If the controller call proved to be successful, extract
       * 'organisationRoleId' from 'stat.payload' and return
       * it with an appropriate status code.
       */

      const controllerResponsePayload = (stat as IControllerSuccess).payload;
      const { responseStatusCode } = controllerResponsePayload;
      res
        .status(responseStatusCode)
        .send({ organisationRoleId: controllerResponsePayload['organisationRoleId'] });
    } catch (error) {
      /*
       * Handle any errors not caught above.
       */
      const { message } = error;
      res.status(500).send({ error: message });
    }
  },
);
