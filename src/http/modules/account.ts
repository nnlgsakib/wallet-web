import { httpGet } from "../request";
import { PageParams } from "../http";
export const isProduct =
  process.env.VUE_APP_NODE_ENV == "production" ||
  process.env.VUE_APP_NODE_ENV == "test"
    ? true
    : false;
const contractApi = isProduct ? "contractApi" : "https://scanapi.erbie.io";
interface GetTransitionsParams {
  page: string;
  page_size: string;
  number: string;
  addr: string;
}
/**
 *
 * @param params page
 * @param params page_size
 * @param params number
 * @param params addr
 * @returns
 */
export function getTransitionsPage(params: GetTransitionsParams) {
  return httpGet(`${contractApi}/transaction/page`, params);
}

export interface GetSnftMetaItem {
  address: string;
  createdAt: number;
  creator: string;
  last_price: null | string;
  meta_url: string;
  owner: string;
  pieces: number;
  remove: boolean;
  reward_at: number;
  reward_number: number;
  royaltyRatio: number;
  tx_amount: number;
}
export interface GetSnftMetaResponse extends PageParams {
  nfts: Array<GetSnftMetaItem>;
}
export interface GetSnftMetaParams extends PageParams {
  collection_id?: undefined | string;
  owner?: undefined | string;
}

// csbt list
export const get_snft_meta_page = (
  params: GetSnftMetaParams
): Promise<GetSnftMetaResponse> => {
  return httpGet(`${contractApi}/snft_meta/page`, params);
};
