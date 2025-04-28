import { IUserControllerDeleteUserInput } from './IUserControllerDeleteUserInput';
import { IUserControllerDeleteUserOutput } from './IUserControllerDeleteUserOutput';

export interface IUserControllerDeleteUser {
  (args: IUserControllerDeleteUserInput): Promise<IUserControllerDeleteUserOutput>;
}
