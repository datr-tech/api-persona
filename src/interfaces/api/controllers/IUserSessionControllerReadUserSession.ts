import { IUserSessionControllerReadUserSessionInput } from './IUserSessionControllerReadUserSessionInput';
import { IUserSessionControllerReadUserSessionOutput } from './IUserSessionControllerReadUserSessionOutput';

export interface IUserSessionControllerReadUserSession {
  (
    args: IUserSessionControllerReadUserSessionInput,
  ): Promise<IUserSessionControllerReadUserSessionOutput>;
}
