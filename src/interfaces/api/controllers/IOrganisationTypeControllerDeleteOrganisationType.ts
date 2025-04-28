import { IOrganisationTypeControllerDeleteOrganisationTypeInput } from './IOrganisationTypeControllerDeleteOrganisationTypeInput';
import { IOrganisationTypeControllerDeleteOrganisationTypeOutput } from './IOrganisationTypeControllerDeleteOrganisationTypeOutput';

export interface IOrganisationTypeControllerDeleteOrganisationType {
  (
    args: IOrganisationTypeControllerDeleteOrganisationTypeInput,
  ): Promise<IOrganisationTypeControllerDeleteOrganisationTypeOutput>;
}
