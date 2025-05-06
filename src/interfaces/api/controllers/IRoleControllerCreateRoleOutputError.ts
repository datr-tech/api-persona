export interface IRoleControllerCreateRoleOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
