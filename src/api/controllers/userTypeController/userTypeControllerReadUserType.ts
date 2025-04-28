import { UserTypeModel } from '@app-ap/api/models';
import { baseStat } from '@app-ap/api/util/baseStat';
import {
  IUserTypeControllerReadUserType,
  IUserTypeControllerReadUserTypeOutputError,
  IUserTypeControllerReadUserTypeOutputSuccess,
} from '@app-ap/interfaces/api/controllers';

/**
 * userTypeControllerReadUserType
 *
 * The persona API read userType controller.
 *
 * @param { IUserTypeControllerReadUserTypeInput } params
 * @param { Types.ObjectId } params.userTypeId
 *
 * @returns { Promise<IUserTypeControllerReadUserTypeOutput> }
 * @returns { Promise<IUserTypeControllerReadUserTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IUserTypeControllerReadUserTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { userTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const userTypeControllerReadUserType: IUserTypeControllerReadUserType = async ({
  userTypeId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'UserTypeModel'
     * using the received 'userTypeId' param.
     */
    const userTypeModel = await UserTypeModel.findById(userTypeId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { userTypeModel };

    /*
     * Cast the response object to
     * 'IUserTypeControllerReadUserTypeOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IUserTypeControllerReadUserTypeOutput'.
     */
    return stat as IUserTypeControllerReadUserTypeOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IUserTypeControllerReadUserTypeOutputError',
     */
    return stat as IUserTypeControllerReadUserTypeOutputError;
  }
};
