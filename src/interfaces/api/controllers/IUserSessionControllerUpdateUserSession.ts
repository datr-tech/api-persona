import { IUserSessionControllerUpdateUserSessionInput } from './IUserSessionControllerUpdateUserSessionInput';
import { IUserSessionControllerUpdateUserSessionOutput } from './IUserSessionControllerUpdateUserSessionOutput';

export interface IUserSessionControllerUpdateUserSession {
  (
    args: IUserSessionControllerUpdateUserSessionInput,
  ): Promise<IUserSessionControllerUpdateUserSessionOutput>;
}
