import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorOrganisationId,
  modelValidatorUserId,
} from '@app-ap/api/modelValidators';
import {
  organisationUserModelSchema,
  organisationUserModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

const organisationUserSchema = new Schema(
  organisationUserModelSchema,
  organisationUserModelSchemaOptions,
);

organisationUserSchema.post('validate', modelValidatorOrganisationId);
organisationUserSchema.post('validate', modelValidatorUserId);
organisationUserSchema.post('validate', modelValidatorAdminStatusId);
organisationUserSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationUserModel = model(
  'OrganisationUserModel',
  organisationUserSchema,
);
