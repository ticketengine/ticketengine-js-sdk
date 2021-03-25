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

export interface AddMollieClientSettingsArguments extends CommandData {
    clientId: string;
    apiKey: string;
    shopperStatement: string;
    redirectUrl: string;
    webHookUrl: string;
}

export interface EditMollieClientSettingsArguments extends CommandData {
    clientId: string;
    apiKey: string;
    shopperStatement: string;
    redirectUrl: string;
    webHookUrl: string;
}

export interface CreateCashPaymentArguments extends CommandData {
    orderId: string;
    customerId?: string;
    currency: string;
    amount: number;
}

export interface CreatePinPaymentArguments extends CommandData {
    orderId: string;
    customerId?: string;
    currency: string;
    amount: number;
}

export interface CreateAdyenPaymentSessionArguments extends CommandData {
    orderId: string;
    customerId?: string;
    currency: string;
    amount: number;
    countryCode?: number;
    customerLocale?: string;
    customerEmail?: string;
    customerIp?: string;
    channel?: string;
    sdkVersion?: string;
}

export interface CreateMolliePaymentArguments extends CommandData {
    orderId: string;
    customerId?: string;
    currency: string;
    amount: number;
    paymentMethod?: string;
    issuer?: string;
    locale?: string;
}

export interface CreatePaymentArguments extends CommandData {
    orderId: string;
    customerId?: string;
    currency: string;
    amount: number;
    token?: string|null;
    paymentMethod?: string|null;
    issuer?: string|null;
    locale?: string|null;
    loyaltyCardType?: string|null;
    loyaltyCardId?: string|null;
    loyaltyCardPin?: string|null;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface AddAdyenClientSettingsResponse extends ApiResponse {
}

export interface EditAdyenClientSettingsResponse extends ApiResponse {
}

export interface AddMollieClientSettingsResponse extends ApiResponse {
}

export interface EditMollieClientSettingsResponse extends ApiResponse {
}

export interface CreateCashPaymentResponse extends ApiResponse {
    data: {
        paymentId: string;
    }
}

export interface CreatePinPaymentResponse extends ApiResponse {
    data: {
        paymentId: string;
    }
}

export interface CreateAdyenPaymentSessionResponse extends ApiResponse {
    data: {
        paymentId: string;
    }
}

export interface CreateMolliePaymentResponse extends ApiResponse {
    data: {
        paymentId: string;
        paymentUrl: string;
    }
}

export interface CreatePaymentResponse extends ApiResponse {
    data: {
        paymentId: string;
        paymentUrl: string;
    }
}

