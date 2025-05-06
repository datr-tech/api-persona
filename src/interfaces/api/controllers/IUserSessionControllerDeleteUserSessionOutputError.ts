export interface IUserSessionControllerDeleteUserSessionOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
