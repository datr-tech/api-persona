import { UserSessionModel } from '@app-ap/api/models';

export const userSessionControllerReadUserSession = async ({ userSessionId }) => {
  const userSession = await UserSessionModel.findById(userSessionId);

  return userSession;
};
