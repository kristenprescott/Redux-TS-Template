import { ApplicationModel } from "./ApplicationModel";
import { UserModel } from "./UserModel";

export interface AppStateModel {
  showLoader: boolean;
  application: ApplicationModel | null;
  user: UserModel | null;
  accessToken: string | null;
}
