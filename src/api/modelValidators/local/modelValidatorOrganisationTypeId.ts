import { OrganisationTypeModel } from '@app-ap/api/models';

export const modelValidatorOrganisationTypeId = async (doc, next) => {
  let organisationType;
  let organisationTypeId;

  if (doc && typeof doc.organisationTypeId !== 'undefined') {
    organisationTypeId = doc.organisationTypeId;
  }

  if (organisationTypeId) {
    organisationType = await OrganisationTypeModel.findById(organisationTypeId);
  }

  if (!organisationType) {
    throw new Error('organisationTypeId: invalid');
  }

  next();
};
