export interface IUserSessionControllerReadUserSessionOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
