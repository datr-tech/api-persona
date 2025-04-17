import { Types } from 'mongoose';
import { OrganisationTypeModel } from '@app/api/models';

export const organisationTypeControllerDeleteOrganisationType = async ({ organisationTypeId }) => {
  const res = await OrganisationTypeModel.findOneAndUpdate(
    {
      _id: organisationTypeId,
    },
    {
      adminStatusId: new Types.ObjectId(),
    },
    {
      includeResultMetadata: true,
    },
  );

  return res;
};
