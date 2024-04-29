export interface IResponseDataProps<T = any> {
  success: boolean;
  message: string;
  responseObject: T;
  statusCode: number;
}
