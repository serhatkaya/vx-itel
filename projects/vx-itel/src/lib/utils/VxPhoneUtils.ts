import * as lpn from 'google-libphonenumber';

export class VxPhoneUtils {
  /** Returns Google Lib. Phone Number Instance */
  public static getLpnInstance(): lpn.PhoneNumberUtil {
    return lpn.PhoneNumberUtil.getInstance();
  }
}
