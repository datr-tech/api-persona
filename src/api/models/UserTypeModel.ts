import { model, Schema } from 'mongoose';
import { userTypeModelSchema, userTypeModelSchemaOptions } from '@freight/persona-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const userTypeSchema = new Schema(userTypeModelSchema, userTypeModelSchemaOptions);

userTypeSchema.post('validate', modelValidatorAdminStatusId);
userTypeSchema.post('validate', modelValidatorAdminUserId);

export const UserTypeModel = model('UserTypeModel', userTypeSchema);
