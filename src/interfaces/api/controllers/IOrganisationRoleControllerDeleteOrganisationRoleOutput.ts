import { IOrganisationRoleControllerDeleteOrganisationRoleOutputError } from './IOrganisationRoleControllerDeleteOrganisationRoleOutputError';
import { IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess } from './IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess';

export type IOrganisationRoleControllerDeleteOrganisationRoleOutput =
  | IOrganisationRoleControllerDeleteOrganisationRoleOutputSuccess
  | IOrganisationRoleControllerDeleteOrganisationRoleOutputError;
