import { model, Schema } from 'mongoose';
import { organisationModelSchema, organisationModelSchemaOptions } from '@freight/persona-model-schemas';
import {
  modelValidatorFrameworkId,
  modelValidatorOrganisationTypeId,
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app/api/modelValidators';

const organisationSchema = new Schema(organisationModelSchema, organisationModelSchemaOptions);

organisationSchema.post('validate', modelValidatorFrameworkId);
organisationSchema.post('validate', modelValidatorOrganisationTypeId);
organisationSchema.post('validate', modelValidatorAdminStatusId);
organisationSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationModel = model('OrganisationModel', organisationSchema);
