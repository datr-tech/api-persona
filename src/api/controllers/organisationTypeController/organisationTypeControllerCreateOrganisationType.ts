import { Types } from 'mongoose';
import { OrganisationTypeModel } from '@app/api/models';

export const organisationTypeControllerCreateOrganisationType = async ({ description, name, adminStatusId, adminUserId }) => {
  const organisationTypeId = new Types.ObjectId();
  const modelParams = {
    organisationTypeId,
    description,
    name,
    adminStatusId,
    adminUserId,
  };

  const organisationTypeModel = new OrganisationTypeModel(modelParams);
  await organisationTypeModel.save();

  return organisationTypeModel._id;
};
