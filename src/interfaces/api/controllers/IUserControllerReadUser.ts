import { IUserControllerReadUserInput } from './IUserControllerReadUserInput';
import { IUserControllerReadUserOutput } from './IUserControllerReadUserOutput';

export interface IUserControllerReadUser {
  (args: IUserControllerReadUserInput): Promise<IUserControllerReadUserOutput>;
}
