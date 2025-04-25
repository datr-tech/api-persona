import { OrganisationRoleModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const organisationRoleControllerDeleteOrganisationRole = async ({
  organisationRoleId,
}) => {
  const res = await OrganisationRoleModel.findOneAndUpdate(
    {
      _id: organisationRoleId,
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
