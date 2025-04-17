import { Types } from 'mongoose';
import { OrganisationUserModel } from '@app/api/models';

export const organisationUserControllerDeleteOrganisationUser = async ({ organisationUserId }) => {
  const res = await OrganisationUserModel.findOneAndUpdate(
    {
      _id: organisationUserId,
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
