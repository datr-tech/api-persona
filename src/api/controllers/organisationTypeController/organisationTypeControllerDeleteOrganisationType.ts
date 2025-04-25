import { OrganisationTypeModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const organisationTypeControllerDeleteOrganisationType = async ({
  organisationTypeId,
}) => {
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
