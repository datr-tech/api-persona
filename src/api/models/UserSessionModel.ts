import { model, Schema } from 'mongoose';
import { userSessionModelSchema, userSessionModelSchemaOptions } from '@freight/persona-model-schemas';
import { modelValidatorUserId, modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const userSessionSchema = new Schema(userSessionModelSchema, userSessionModelSchemaOptions);

userSessionSchema.post('validate', modelValidatorUserId);
userSessionSchema.post('validate', modelValidatorAdminStatusId);
userSessionSchema.post('validate', modelValidatorAdminUserId);

export const UserSessionModel = model('UserSessionModel', userSessionSchema);
