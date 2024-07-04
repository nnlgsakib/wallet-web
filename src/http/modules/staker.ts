import { PageParams, PageResponse } from "../http";
import { httpGet, httpPost } from "../request";
import { isProduct } from "./common";
import { nftaimint } from "./nft";
const contractApi = isProduct ? "/contractApi" : "https://scanapi.erbie.io";

export type ValidParams = {
  index: string;
  count: string;
};
export const getValidatorInfo = (params: ValidParams) => {
  return httpPost(`${nftaimint}/v1/getValidatorInfo`, params);
};

export type GetCoefParams = {
  users: string;
};
export const getUsersCoefficient = (params: GetCoefParams) => {
  return httpPost(`${nftaimint}/v1/getUsersCoefficient`, params);
};

export type GetValidatorOrder =
  | "amount ASC"
  | "amount DESC"
  | "reward ASC"
  | "reward DESC"
  | "timestamp ASC"
  | "timestamp DESC"
  | "block_number ASC"
  | "block_number DESC"
  | "weight ASC"
  | "weight DESC"
  | "score ASC"
  | "score DESC"
  | "";
export type ValidatorPageParams = {
  order:
    | "score desc"
    | "score asc"
    | "amount desc"
    | "amount asc"
    | "weight desc"
    | "weight asc";
  page: string;
  page_size: string;
};

export interface GetValidatorListItem {
  address: string;
  amount: string;
  block_number: number;
  proxy: string;
  reward: string;
  reward_count: number;
  reward_number: number;
  score: number;
  timestamp: number;
  tx_hash: string;
  weight: number;
}
export interface GetValidatorResponse extends PageResponse {
  data: Array<GetValidatorListItem>;
}
export interface GetValidatorParams extends PageParams {
  order: GetValidatorOrder;
}
// validators list
export const validatorPage = (
  params: GetValidatorParams
): Promise<GetValidatorResponse> => {
  return httpGet(`${contractApi}/validator/page`, params);
};
