
import { httpGet,httpPost } from '../request'
import { nftaimint } from './nft'

export type ValidParams = {
    index: string
    count: string
}
export const getValidatorInfo = (params: ValidParams) => {
    return httpPost(`${nftaimint}/v1/getValidatorInfo`, params)
}

export type GetCoefParams = {
    users: string
}
export const getUsersCoefficient = (params: GetCoefParams) => {
    return httpPost(`${nftaimint}/v1/getUsersCoefficient`, params)
  
}

