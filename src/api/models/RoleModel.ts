import {
  modelValidatorAdminStatusId,
  modelValidatorAdminUserId,
} from '@app-ap/api/modelValidators/foreign';
import {
  roleModelSchema,
  roleModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

const roleSchema = new Schema(roleModelSchema, roleModelSchemaOptions);

roleSchema.post('validate', modelValidatorAdminStatusId);
roleSchema.post('validate', modelValidatorAdminUserId);

export const RoleModel = model('RoleModel', roleSchema);
