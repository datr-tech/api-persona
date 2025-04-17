import { Types } from 'mongoose';
import { OrganisationRoleModel } from '@app/api/models';

export const organisationRoleControllerDeleteOrganisationRole = async ({ organisationRoleId }) => {
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
