import { IOrganisationRoleControllerReadOrganisationRoleInput } from './IOrganisationRoleControllerReadOrganisationRoleInput';
import { IOrganisationRoleControllerReadOrganisationRoleOutput } from './IOrganisationRoleControllerReadOrganisationRoleOutput';

export interface IOrganisationRoleControllerReadOrganisationRole {
  (
    args: IOrganisationRoleControllerReadOrganisationRoleInput,
  ): Promise<IOrganisationRoleControllerReadOrganisationRoleOutput>;
}
