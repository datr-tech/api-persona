import { IOrganisationControllerCreateOrganisationOutputError } from './IOrganisationControllerCreateOrganisationOutputError';
import { IOrganisationControllerCreateOrganisationOutputSuccess } from './IOrganisationControllerCreateOrganisationOutputSuccess';

export type IOrganisationControllerCreateOrganisationOutput =
  | IOrganisationControllerCreateOrganisationOutputSuccess
  | IOrganisationControllerCreateOrganisationOutputError;
