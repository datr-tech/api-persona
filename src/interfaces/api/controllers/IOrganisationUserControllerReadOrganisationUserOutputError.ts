export interface IOrganisationUserControllerReadOrganisationUserOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
