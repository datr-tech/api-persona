import { OrganisationUserModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const organisationUserControllerDeleteOrganisationUser = async ({
  organisationUserId,
}) => {
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
