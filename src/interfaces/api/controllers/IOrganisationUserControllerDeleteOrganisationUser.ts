import { IOrganisationUserControllerDeleteOrganisationUserInput } from './IOrganisationUserControllerDeleteOrganisationUserInput';
import { IOrganisationUserControllerDeleteOrganisationUserOutput } from './IOrganisationUserControllerDeleteOrganisationUserOutput';

export interface IOrganisationUserControllerDeleteOrganisationUser {
  (
    args: IOrganisationUserControllerDeleteOrganisationUserInput,
  ): Promise<IOrganisationUserControllerDeleteOrganisationUserOutput>;
}
