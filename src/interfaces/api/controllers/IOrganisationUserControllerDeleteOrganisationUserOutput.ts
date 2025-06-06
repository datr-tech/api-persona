import { IOrganisationUserControllerDeleteOrganisationUserOutputError } from './IOrganisationUserControllerDeleteOrganisationUserOutputError';
import { IOrganisationUserControllerDeleteOrganisationUserOutputSuccess } from './IOrganisationUserControllerDeleteOrganisationUserOutputSuccess';

export type IOrganisationUserControllerDeleteOrganisationUserOutput =
  | IOrganisationUserControllerDeleteOrganisationUserOutputSuccess
  | IOrganisationUserControllerDeleteOrganisationUserOutputError;
