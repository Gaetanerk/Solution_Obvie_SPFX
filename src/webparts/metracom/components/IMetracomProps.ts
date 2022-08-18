//import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IMetracomProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: any;
  //spcontext:WebPartContext;
}
