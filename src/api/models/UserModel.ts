import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ap/api/modelValidators/foreign';

import { modelValidatorUserTypeId } from '@app-ap/api/modelValidators/local/modelValidatorUserTypeId';

import {
  userModelSchema,
  userModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';

import { model, Schema } from 'mongoose';

const userSchema = new Schema(userModelSchema, userModelSchemaOptions);

userSchema.post('validate', modelValidatorUserTypeId);
userSchema.post('validate', modelValidatorAdminStatusId);
userSchema.post('validate', modelValidatorAdminUserId);

export const UserModel = model('UserModel', userSchema);
