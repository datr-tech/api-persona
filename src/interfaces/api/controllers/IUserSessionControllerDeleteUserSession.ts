import { IUserSessionControllerDeleteUserSessionInput } from './IUserSessionControllerDeleteUserSessionInput';
import { IUserSessionControllerDeleteUserSessionOutput } from './IUserSessionControllerDeleteUserSessionOutput';

export interface IUserSessionControllerDeleteUserSession {
  (
    args: IUserSessionControllerDeleteUserSessionInput,
  ): Promise<IUserSessionControllerDeleteUserSessionOutput>;
}
