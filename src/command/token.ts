import {ApiResponse, CommandData} from "../call";


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////
export interface CreateCouponArguments extends CommandData {
    name: string;
    description?: string;
    useLimit: number;
}

export interface ChangeCouponArguments extends CommandData {
    id: string;
    name: string;
    description?: string;
    useLimit: number;
}

export interface CreateTokensArguments extends CommandData {
    typeId: string;
    tokens: Array<string>;
}

export interface RemoveTokenArguments extends CommandData {
    id?: string;
    token?: string;
}

export interface UseTokenArguments extends CommandData {
    token: string;
}




///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface CreateCouponResponse extends ApiResponse {
    data: {
        couponId: string;
    }
}

export interface ChangeCouponResponse extends ApiResponse {}

export interface CreateTokensResponse extends ApiResponse {}

export interface RemoveTokenResponse extends ApiResponse {}

export interface UseTokenResponse extends ApiResponse {
    data: {
        tokenId: string;
        tokenTypeId: string;
        type: string;
        token: string;
    }
}

