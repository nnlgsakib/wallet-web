
import { httpGet,httpPost } from '../request'
import { nftaimint } from './nft'
const contractApi = '/contractApi'  

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

export type ValidatorPageParams = {
    order: 'score desc' | 'score asc' | 'amount desc' | 'amount asc' | 'weight desc' | 'weight asc',
    page: string,
    page_size: string
}


export const validatorPage = (params: ValidatorPageParams) => {
    return httpGet(`${contractApi}/validator/page`, params)
  
}

