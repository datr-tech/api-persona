export interface IUserSessionControllerUpdateUserSessionOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
