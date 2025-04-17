import { Types } from 'mongoose';
import { OrganisationModel } from '@app/api/models';

export const organisationControllerCreateOrganisation = async ({
  frameworkId,
  organisationTypeId,
  description,
  name,
  adminStatusId,
  adminUserId,
}) => {
  const organisationId = new Types.ObjectId();
  const modelParams = {
    organisationId,
    frameworkId,
    organisationTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const organisationModel = new OrganisationModel(modelParams);
  await organisationModel.save();

  return organisationModel._id;
};
