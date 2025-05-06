export interface IRoleControllerReadRoleOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
