export interface IOrganisationControllerCreateOrganisationOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
