import { IOrganisationUserControllerCreateOrganisationUserInput } from './IOrganisationUserControllerCreateOrganisationUserInput';
import { IOrganisationUserControllerCreateOrganisationUserOutput } from './IOrganisationUserControllerCreateOrganisationUserOutput';

export interface IOrganisationUserControllerCreateOrganisationUser {
  (
    args: IOrganisationUserControllerCreateOrganisationUserInput,
  ): Promise<IOrganisationUserControllerCreateOrganisationUserOutput>;
}
