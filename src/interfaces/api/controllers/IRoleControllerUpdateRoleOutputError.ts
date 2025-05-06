export interface IRoleControllerUpdateRoleOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
