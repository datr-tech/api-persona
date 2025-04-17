import { Types } from 'mongoose';
import { OrganisationModel } from '@app/api/models';

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
