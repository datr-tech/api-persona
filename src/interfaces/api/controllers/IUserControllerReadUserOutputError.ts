export interface IUserControllerReadUserOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
