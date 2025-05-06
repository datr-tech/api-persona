export interface IOrganisationControllerReadOrganisationOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
