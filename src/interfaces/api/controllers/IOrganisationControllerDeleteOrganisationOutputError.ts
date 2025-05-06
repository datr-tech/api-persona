export interface IOrganisationControllerDeleteOrganisationOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
