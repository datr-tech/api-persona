export interface IOrganisationControllerUpdateOrganisationOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
