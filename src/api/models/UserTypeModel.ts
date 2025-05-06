import { modelValidatorAdminStatusId } from '@app-ap/api/modelValidators/foreign';
import { modelValidatorAdminUserId } from '@app-ap/api/modelValidators/local/modelValidatorAdminUserId';
import {
  userTypeModelSchema,
  userTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';

import { model, Schema } from 'mongoose';

const userTypeSchema = new Schema(userTypeModelSchema, userTypeModelSchemaOptions);

userTypeSchema.post('validate', modelValidatorAdminStatusId);
userTypeSchema.post('validate', modelValidatorAdminUserId);

export const UserTypeModel = model('UserTypeModel', userTypeSchema);
