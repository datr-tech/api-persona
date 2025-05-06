export interface IRoleControllerDeleteRoleOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
