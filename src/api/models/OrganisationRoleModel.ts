import { model, Schema } from 'mongoose';
import { organisationRoleModelSchema, organisationRoleModelSchemaOptions } from '@freight/persona-model-schemas';
import {
  modelValidatorOrganisationId,
  modelValidatorRoleId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const organisationRoleSchema = new Schema(organisationRoleModelSchema, organisationRoleModelSchemaOptions);

organisationRoleSchema.post('validate', modelValidatorOrganisationId);
organisationRoleSchema.post('validate', modelValidatorRoleId);
organisationRoleSchema.post('validate', modelValidatorAdminStatusId);
organisationRoleSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationRoleModel = model('OrganisationRoleModel', organisationRoleSchema);
