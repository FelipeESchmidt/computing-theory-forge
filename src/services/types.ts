import { LanguageType } from "@assets/languages";

export interface IResponseDataProps<T = any> {
  success: boolean;
  message: keyof LanguageType["messages"];
  responseObject: T;
  statusCode: number;
}
