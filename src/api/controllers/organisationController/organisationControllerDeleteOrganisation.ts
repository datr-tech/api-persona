import { OrganisationModel } from '@app-ap/api/models';
import { Types } from 'mongoose';

export const organisationControllerDeleteOrganisation = async ({ organisationId }) => {
  const res = await OrganisationModel.findOneAndUpdate(
    {
      _id: organisationId,
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
