export interface IUserControllerDeleteUserOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
