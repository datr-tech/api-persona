import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ap/api/modelValidators/foreign';

import { modelValidatorOrganisationId } from '@app-ap/api/modelValidators/local/modelValidatorOrganisationId';

import { modelValidatorRoleId } from '@app-ap/api/modelValidators/local/modelValidatorRoleId';

import {
  organisationRoleModelSchema,
  organisationRoleModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';

import { model, Schema } from 'mongoose';

const organisationRoleSchema = new Schema(
  organisationRoleModelSchema,
  organisationRoleModelSchemaOptions,
);

organisationRoleSchema.post('validate', modelValidatorOrganisationId);
organisationRoleSchema.post('validate', modelValidatorRoleId);
organisationRoleSchema.post('validate', modelValidatorAdminStatusId);
organisationRoleSchema.post('validate', modelValidatorAdminUserId);

export const OrganisationRoleModel = model(
  'OrganisationRoleModel',
  organisationRoleSchema,
);
