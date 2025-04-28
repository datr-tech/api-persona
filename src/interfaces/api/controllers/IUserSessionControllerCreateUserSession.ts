import { IUserSessionControllerCreateUserSessionInput } from './IUserSessionControllerCreateUserSessionInput';
import { IUserSessionControllerCreateUserSessionOutput } from './IUserSessionControllerCreateUserSessionOutput';

export interface IUserSessionControllerCreateUserSession {
  (
    args: IUserSessionControllerCreateUserSessionInput,
  ): Promise<IUserSessionControllerCreateUserSessionOutput>;
}
