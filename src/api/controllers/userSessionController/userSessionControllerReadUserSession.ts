import { UserSessionModel } from '@app/api/models';

export const userSessionControllerReadUserSession = async ({ userSessionId }) => {
  const userSession = await UserSessionModel.findById(userSessionId);

  return userSession;
};
