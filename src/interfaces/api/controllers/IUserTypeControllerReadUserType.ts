import { IUserTypeControllerReadUserTypeInput } from './IUserTypeControllerReadUserTypeInput';
import { IUserTypeControllerReadUserTypeOutput } from './IUserTypeControllerReadUserTypeOutput';

export interface IUserTypeControllerReadUserType {
  (
    args: IUserTypeControllerReadUserTypeInput,
  ): Promise<IUserTypeControllerReadUserTypeOutput>;
}
