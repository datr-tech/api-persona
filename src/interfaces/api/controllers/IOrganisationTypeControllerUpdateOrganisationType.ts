import { IOrganisationTypeControllerUpdateOrganisationTypeInput } from './IOrganisationTypeControllerUpdateOrganisationTypeInput';
import { IOrganisationTypeControllerUpdateOrganisationTypeOutput } from './IOrganisationTypeControllerUpdateOrganisationTypeOutput';

export interface IOrganisationTypeControllerUpdateOrganisationType {
  (
    args: IOrganisationTypeControllerUpdateOrganisationTypeInput,
  ): Promise<IOrganisationTypeControllerUpdateOrganisationTypeOutput>;
}
