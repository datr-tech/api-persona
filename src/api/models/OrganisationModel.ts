import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
  modelValidatorFrameworkId,
} from '@app-ap/api/modelValidators/foreign';

import { modelValidatorOrganisationTypeId } from '@app-ap/api/modelValidators/local/modelValidatorOrganisationTypeId';

import {
  organisationModelSchema,
  organisationModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';

import { model, Schema } from 'mongoose';

const organisationSchema = new Schema(
  organisationModelSchema,
  organisationModelSchemaOptions,
);

organisationSchema.post('validate', modelValidatorFrameworkId);
organisationSchema.post('validate', modelValidatorOrganisationTypeId);
organisationSchema.post('validate', modelValidatorAdminStatusId);
organisationSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationModel = model('OrganisationModel', organisationSchema);
