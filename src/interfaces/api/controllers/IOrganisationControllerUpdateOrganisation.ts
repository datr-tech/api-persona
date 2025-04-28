import { IOrganisationControllerUpdateOrganisationInput } from './IOrganisationControllerUpdateOrganisationInput';
import { IOrganisationControllerUpdateOrganisationOutput } from './IOrganisationControllerUpdateOrganisationOutput';

export interface IOrganisationControllerUpdateOrganisation {
  (
    args: IOrganisationControllerUpdateOrganisationInput,
  ): Promise<IOrganisationControllerUpdateOrganisationOutput>;
}
