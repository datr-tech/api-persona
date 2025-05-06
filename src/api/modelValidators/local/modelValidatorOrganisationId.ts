import { OrganisationModel } from '@app-ap/api/models/OrganisationModel';

export const modelValidatorOrganisationId = async (doc, next) => {
  let organisation;
  let organisationId;

  if (doc && typeof doc.organisationId !== 'undefined') {
    organisationId = doc.organisationId;
  }

  if (organisationId) {
    organisation = await OrganisationModel.findById(organisationId);
  }

  if (!organisation) {
    throw new Error('organisationId: invalid');
  }

  next();
};
