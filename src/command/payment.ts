import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface AddAdyenClientSettingsArguments extends CommandData {
    clientId: string;
    origin: string;
    returnUrl: string;
    merchantAccount: string;
    apiKey: string;
    allowedPaymentMethods: Array<string>;
    shopperStatement: string;
    enableOneClick: boolean;
    enablePayPut: boolean;
}

export interface EditAdyenClientSettingsArguments extends CommandData {
    clientId: string;
    origin: string;
    returnUrl: string;
    merchantAccount: string;
    apiKey: string;
    allowedPaymentMethods: Array<string>;
    shopperStatement: string;
    enableOneClick: boolean;
    enablePayPut: boolean;
}

export interface CreateCashPaymentArguments extends CommandData {
    orderId: string;
    customerId: string;
    currency: string;
    amount: number;
}

export interface CreateAdyenPaymentSessionArguments extends CommandData {
    orderId: string;
    customerId: string;
    currency: string;
    amount: number;
    countryCode?: number;
    customerLocale?: string;
    customerEmail?: string;
    customerIp?: string;
    channel?: string;
    sdkVersion?: string;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface AddAdyenClientSettingsResponse extends ApiResponse {
}

export interface EditAdyenClientSettingsResponse extends ApiResponse {
}

export interface CreateCashPaymentResponse extends ApiResponse {
    paymentId: string;
}

export interface CreateAdyenPaymentSessionResponse extends ApiResponse {
    paymentId: string;
}


