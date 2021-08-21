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

export interface CreatePaymentRefundArguments extends CommandData {
    aggregateId: string;
    registerId: string;
    currency: string;
    amount: number;
    paymentMethod: string;
}

export interface CreateAlternativePaymentMethodArguments extends CommandData {
    name: string;
    allowedRegisters: string[];
}

export interface RenameAlternativePaymentMethodArguments extends CommandData {
    id: string;
    name: string;
}

export interface SetAlternativePaymentMethodAllowedRegistersArguments extends CommandData {
    id: string;
    allowedRegisters: string[];
}

export interface AllowAlternativePaymentMethodRegisterArguments extends CommandData {
    id: string;
    registerId: string;
}

export interface DenyAlternativePaymentMethodRegisterArguments extends CommandData {
    id: string;
    registerId: string;
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

export interface CreatePaymentRefundResponse extends ApiResponse {
    data: {
        refundId: string;
    }
}

export interface CreateAlternativePaymentMethodResponse extends ApiResponse {
    data: {
        paymentMethodId: string;
    }
}

export interface RenameAlternativePaymentMethodResponse extends ApiResponse {}
export interface SetAlternativePaymentMethodAllowedRegistersResponse extends ApiResponse {}
export interface AllowAlternativePaymentMethodRegisterResponse extends ApiResponse {}
export interface DenyAlternativePaymentMethodRegisterResponse extends ApiResponse {}


