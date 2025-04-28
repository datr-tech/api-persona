import { IOrganisationTypeControllerReadOrganisationTypeInput } from './IOrganisationTypeControllerReadOrganisationTypeInput';
import { IOrganisationTypeControllerReadOrganisationTypeOutput } from './IOrganisationTypeControllerReadOrganisationTypeOutput';

export interface IOrganisationTypeControllerReadOrganisationType {
  (
    args: IOrganisationTypeControllerReadOrganisationTypeInput,
  ): Promise<IOrganisationTypeControllerReadOrganisationTypeOutput>;
}
