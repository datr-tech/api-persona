import { IOrganisationUserControllerReadOrganisationUserInput } from './IOrganisationUserControllerReadOrganisationUserInput';
import { IOrganisationUserControllerReadOrganisationUserOutput } from './IOrganisationUserControllerReadOrganisationUserOutput';

export interface IOrganisationUserControllerReadOrganisationUser {
  (
    args: IOrganisationUserControllerReadOrganisationUserInput,
  ): Promise<IOrganisationUserControllerReadOrganisationUserOutput>;
}
