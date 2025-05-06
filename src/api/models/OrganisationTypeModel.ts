import { modelValidatorAdminStatusId } from '@app-ap/api/modelValidators/foreign';
import { modelValidatorAdminUserId } from '@app-ap/api/modelValidators/local/modelValidatorAdminUserId';
import {
  organisationTypeModelSchema,
  organisationTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';

import { model, Schema } from 'mongoose';

const organisationTypeSchema = new Schema(
  organisationTypeModelSchema,
  organisationTypeModelSchemaOptions,
);

organisationTypeSchema.post('validate', modelValidatorAdminStatusId);
organisationTypeSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationTypeModel = model(
  'OrganisationTypeModel',
  organisationTypeSchema,
);
