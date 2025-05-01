import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ap/api/modelValidators/foreign';

import { modelValidatorUserId } from '@app-ap/api/modelValidators/local/modelValidatorUserId';

import {
  userSessionModelSchema,
  userSessionModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';

import { model, Schema } from 'mongoose';

const userSessionSchema = new Schema(
  userSessionModelSchema,
  userSessionModelSchemaOptions,
);

userSessionSchema.post('validate', modelValidatorUserId);
userSessionSchema.post('validate', modelValidatorAdminStatusId);
userSessionSchema.post('validate', modelValidatorAdminUserId);

export const UserSessionModel = model('UserSessionModel', userSessionSchema);
