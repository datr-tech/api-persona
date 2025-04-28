import { IUserControllerUpdateUserInput } from './IUserControllerUpdateUserInput';
import { IUserControllerUpdateUserOutput } from './IUserControllerUpdateUserOutput';

export interface IUserControllerUpdateUser {
  (args: IUserControllerUpdateUserInput): Promise<IUserControllerUpdateUserOutput>;
}
