import { IOrganisationControllerCreateOrganisationInput } from './IOrganisationControllerCreateOrganisationInput';
import { IOrganisationControllerCreateOrganisationOutput } from './IOrganisationControllerCreateOrganisationOutput';

export interface IOrganisationControllerCreateOrganisation {
  (
    args: IOrganisationControllerCreateOrganisationInput,
  ): Promise<IOrganisationControllerCreateOrganisationOutput>;
}
