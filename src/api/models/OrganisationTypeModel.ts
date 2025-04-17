import { model, Schema } from 'mongoose';
import { organisationTypeModelSchema, organisationTypeModelSchemaOptions } from '@freight/persona-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const organisationTypeSchema = new Schema(organisationTypeModelSchema, organisationTypeModelSchemaOptions);

organisationTypeSchema.post('validate', modelValidatorAdminStatusId);
organisationTypeSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationTypeModel = model('OrganisationTypeModel', organisationTypeSchema);
