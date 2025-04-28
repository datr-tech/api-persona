import { IOrganisationControllerReadOrganisationInput } from './IOrganisationControllerReadOrganisationInput';
import { IOrganisationControllerReadOrganisationOutput } from './IOrganisationControllerReadOrganisationOutput';

export interface IOrganisationControllerReadOrganisation {
  (
    args: IOrganisationControllerReadOrganisationInput,
  ): Promise<IOrganisationControllerReadOrganisationOutput>;
}
