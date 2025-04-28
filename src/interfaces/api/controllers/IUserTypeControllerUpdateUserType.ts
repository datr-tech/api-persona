import { IUserTypeControllerUpdateUserTypeInput } from './IUserTypeControllerUpdateUserTypeInput';
import { IUserTypeControllerUpdateUserTypeOutput } from './IUserTypeControllerUpdateUserTypeOutput';

export interface IUserTypeControllerUpdateUserType {
  (
    args: IUserTypeControllerUpdateUserTypeInput,
  ): Promise<IUserTypeControllerUpdateUserTypeOutput>;
}
