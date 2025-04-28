import { IOrganisationControllerDeleteOrganisationInput } from './IOrganisationControllerDeleteOrganisationInput';
import { IOrganisationControllerDeleteOrganisationOutput } from './IOrganisationControllerDeleteOrganisationOutput';

export interface IOrganisationControllerDeleteOrganisation {
  (
    args: IOrganisationControllerDeleteOrganisationInput,
  ): Promise<IOrganisationControllerDeleteOrganisationOutput>;
}
