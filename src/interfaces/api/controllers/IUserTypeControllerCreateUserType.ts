import { IUserTypeControllerCreateUserTypeInput } from './IUserTypeControllerCreateUserTypeInput';
import { IUserTypeControllerCreateUserTypeOutput } from './IUserTypeControllerCreateUserTypeOutput';

export interface IUserTypeControllerCreateUserType {
  (
    args: IUserTypeControllerCreateUserTypeInput,
  ): Promise<IUserTypeControllerCreateUserTypeOutput>;
}
