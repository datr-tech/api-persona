export interface IUserControllerUpdateUserOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
