import { IUserTypeControllerDeleteUserTypeInput } from './IUserTypeControllerDeleteUserTypeInput';
import { IUserTypeControllerDeleteUserTypeOutput } from './IUserTypeControllerDeleteUserTypeOutput';

export interface IUserTypeControllerDeleteUserType {
  (
    args: IUserTypeControllerDeleteUserTypeInput,
  ): Promise<IUserTypeControllerDeleteUserTypeOutput>;
}
