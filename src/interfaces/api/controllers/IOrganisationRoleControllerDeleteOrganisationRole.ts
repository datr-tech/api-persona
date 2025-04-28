import { IOrganisationRoleControllerDeleteOrganisationRoleInput } from './IOrganisationRoleControllerDeleteOrganisationRoleInput';
import { IOrganisationRoleControllerDeleteOrganisationRoleOutput } from './IOrganisationRoleControllerDeleteOrganisationRoleOutput';

export interface IOrganisationRoleControllerDeleteOrganisationRole {
  (
    args: IOrganisationRoleControllerDeleteOrganisationRoleInput,
  ): Promise<IOrganisationRoleControllerDeleteOrganisationRoleOutput>;
}
