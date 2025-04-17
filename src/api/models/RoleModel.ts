import { model, Schema } from 'mongoose';
import { roleModelSchema, roleModelSchemaOptions } from '@freight/persona-model-schemas';
import { modelValidatorAdminStatusId, modelValidatorAdminUserId } from '@app/api/modelValidators';

const roleSchema = new Schema(roleModelSchema, roleModelSchemaOptions);

roleSchema.post('validate', modelValidatorAdminStatusId);
roleSchema.post('validate', modelValidatorAdminUserId);

export const RoleModel = model('RoleModel', roleSchema);
