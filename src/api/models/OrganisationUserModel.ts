import { model, Schema } from 'mongoose';
import { organisationUserModelSchema, organisationUserModelSchemaOptions } from '@freight/persona-model-schemas';
import {
  modelValidatorOrganisationId,
  modelValidatorUserId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const organisationUserSchema = new Schema(organisationUserModelSchema, organisationUserModelSchemaOptions);

organisationUserSchema.post('validate', modelValidatorOrganisationId);
organisationUserSchema.post('validate', modelValidatorUserId);
organisationUserSchema.post('validate', modelValidatorAdminStatusId);
organisationUserSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationUserModel = model('OrganisationUserModel', organisationUserSchema);
