import { IUserControllerCreateUserInput } from './IUserControllerCreateUserInput';
import { IUserControllerCreateUserOutput } from './IUserControllerCreateUserOutput';

export interface IUserControllerCreateUser {
  (args: IUserControllerCreateUserInput): Promise<IUserControllerCreateUserOutput>;
}
