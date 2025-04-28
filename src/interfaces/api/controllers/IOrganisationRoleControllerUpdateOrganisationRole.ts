import { IOrganisationRoleControllerUpdateOrganisationRoleInput } from './IOrganisationRoleControllerUpdateOrganisationRoleInput';
import { IOrganisationRoleControllerUpdateOrganisationRoleOutput } from './IOrganisationRoleControllerUpdateOrganisationRoleOutput';

export interface IOrganisationRoleControllerUpdateOrganisationRole {
  (
    args: IOrganisationRoleControllerUpdateOrganisationRoleInput,
  ): Promise<IOrganisationRoleControllerUpdateOrganisationRoleOutput>;
}
