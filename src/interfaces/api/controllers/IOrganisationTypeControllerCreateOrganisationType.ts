import { IOrganisationTypeControllerCreateOrganisationTypeInput } from './IOrganisationTypeControllerCreateOrganisationTypeInput';
import { IOrganisationTypeControllerCreateOrganisationTypeOutput } from './IOrganisationTypeControllerCreateOrganisationTypeOutput';

export interface IOrganisationTypeControllerCreateOrganisationType {
  (
    args: IOrganisationTypeControllerCreateOrganisationTypeInput,
  ): Promise<IOrganisationTypeControllerCreateOrganisationTypeOutput>;
}
