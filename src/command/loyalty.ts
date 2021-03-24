import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface AddIntersolveApiConfigArguments extends CommandData {
    url: string;
    username: string;
    password: string;
}

export interface RemoveIntersolveApiConfigArguments extends CommandData {

}

export interface ValidateLoyaltyCardArguments extends CommandData {
    cardType: string;
    cardId: string;
    cardPin?: string;
}

export interface CreateLoyaltyCardTransactionArguments extends CommandData {
    cardType: string;
    cardId: string;
    cardPin?: string;
    currencyCode: string;
    amount: string;
    orderId: string;
    paymentId: string;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface AddIntersolveApiConfigResponse extends ApiResponse {}
export interface RemoveIntersolveApiConfigResponse extends ApiResponse {}
export interface ValidateLoyaltyCardResponse extends ApiResponse {}
export interface CreateLoyaltyCardTransactionResponse extends ApiResponse {
    data: {
        transactionId: string;
    }
}





