export interface IUserSessionControllerCreateUserSessionOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
