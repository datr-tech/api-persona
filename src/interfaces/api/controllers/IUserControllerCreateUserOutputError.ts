export interface IUserControllerCreateUserOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
