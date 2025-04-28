import { IOrganisationControllerReadOrganisationOutputError } from './IOrganisationControllerReadOrganisationOutputError';
import { IOrganisationControllerReadOrganisationOutputSuccess } from './IOrganisationControllerReadOrganisationOutputSuccess';

export type IOrganisationControllerReadOrganisationOutput =
  | IOrganisationControllerReadOrganisationOutputSuccess
  | IOrganisationControllerReadOrganisationOutputError;
