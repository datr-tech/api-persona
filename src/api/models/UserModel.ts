import { model, Schema } from 'mongoose';
import { userModelSchema, userModelSchemaOptions } from '@freight/persona-model-schemas';
import { modelValidatorUserTypeId, modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const userSchema = new Schema(userModelSchema, userModelSchemaOptions);

userSchema.post('validate', modelValidatorUserTypeId);
userSchema.post('validate', modelValidatorAdminStatusId);
userSchema.post('validate', modelValidatorAdminUserId);

export const UserModel = model('UserModel', userSchema);
