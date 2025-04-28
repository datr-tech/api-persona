import { IOrganisationRoleControllerCreateOrganisationRoleInput } from './IOrganisationRoleControllerCreateOrganisationRoleInput';
import { IOrganisationRoleControllerCreateOrganisationRoleOutput } from './IOrganisationRoleControllerCreateOrganisationRoleOutput';

export interface IOrganisationRoleControllerCreateOrganisationRole {
  (
    args: IOrganisationRoleControllerCreateOrganisationRoleInput,
  ): Promise<IOrganisationRoleControllerCreateOrganisationRoleOutput>;
}
