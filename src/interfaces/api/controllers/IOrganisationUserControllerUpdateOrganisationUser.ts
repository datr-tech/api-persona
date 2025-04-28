import { IOrganisationUserControllerUpdateOrganisationUserInput } from './IOrganisationUserControllerUpdateOrganisationUserInput';
import { IOrganisationUserControllerUpdateOrganisationUserOutput } from './IOrganisationUserControllerUpdateOrganisationUserOutput';

export interface IOrganisationUserControllerUpdateOrganisationUser {
  (
    args: IOrganisationUserControllerUpdateOrganisationUserInput,
  ): Promise<IOrganisationUserControllerUpdateOrganisationUserOutput>;
}
