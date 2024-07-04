export declare interface RequestParams {
  [key: string]: any;
}

export interface GetTransitionsParams {
  module: string;
  action: string;
  address: string;
  apikey: string;
}

export interface PageParams {
  page: number;
  page_size: number;
}

export interface PageResponse {
  total: number;
}
