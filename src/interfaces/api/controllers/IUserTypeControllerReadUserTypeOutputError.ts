export interface IUserTypeControllerReadUserTypeOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
