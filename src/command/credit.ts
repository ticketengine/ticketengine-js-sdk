import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface OpenAccountArguments extends CommandData {
    currencyCode: string;
    customerId?: string;
}

export interface CloseAccountArguments extends CommandData {
    accountNumber: string;
}

export interface AssignAccountHolderArguments extends CommandData {
    accountNumber: string;
    customerId: string;
}

export interface DepositCreditArguments extends CommandData {
    accountNumber: string;
    currencyCode: string;
    amount: number;
    transactionId?: string;
    from?: string;
    paymentId?: string;
    orderId?: string;
    reference?: string;
    webHookUrl?: string;
}

export interface TransferCreditArguments extends CommandData {
    accountNumber: string;
    currencyCode: string;
    amount: number;
    to: string;
    paymentId?: string;
    orderId?: string;
    reference?: string;
    webHookUrl?: string;
}

export interface RefundCreditArguments extends CommandData {
    accountNumber: string;
    currencyCode: string;
    amount: number;
    transactionId?: string;
    reason?: string;
}

export interface PayWithCreditArguments extends CommandData {
    accountToken: string;
    currencyCode: string;
    amount: number;
    paymentId?: string;
    orderId?: string;
    reference?: string;
    webHookUrl?: string;
}

export interface OpenAccountAndDepositCreditArguments extends CommandData {
    currencyCode: string;
    amount: number;
    transactionId?: string;
    from?: string;
    paymentId?: string;
    orderId?: string;
    orderLineItemId?: string;
    reference?: string;
    webHookUrl?: string;
    customerId?: string;
}

export interface CloseAccountAndWithdrawCreditArguments extends CommandData {
    accountNumber: string;
    currencyCode: string;
    amount: number;
    to?: string;
    transactionId?: string;
    paymentId?: string;
    orderId?: string;
    reference?: string;
    webHookUrl?: string;
}

export interface CreateAccountCurrencyArguments extends CommandData {
    code: string;
    name: string;
    exponent: number;
    symbol: string;
}

export interface RenameAccountCurrencyArguments extends CommandData {
    code: string;
    name: string;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface OpenAccountResponse extends ApiResponse {
    data: {
        accountNumber: string;
    }
}
export interface CloseAccountResponse extends ApiResponse {}
export interface AssignAccountHolderResponse extends ApiResponse {}
export interface DepositCreditResponse extends ApiResponse {
    data: {
        transactionId: string;
    }
}
export interface TransferCreditResponse extends ApiResponse {
    data: {
        transactionId: string;
    }
}
export interface RefundCreditResponse extends ApiResponse {}
export interface PayWithCreditResponse extends ApiResponse {
    data: {
        transactionId: string;
    }
}
export interface OpenAccountAndDepositCreditResponse extends ApiResponse {
    data: {
        accountNumber: string;
    }
}
export interface CloseAccountAndWithdrawCreditResponse extends ApiResponse {}
export interface CreateAccountCurrencyResponse extends ApiResponse {}
export interface RenameAccountCurrencyResponse extends ApiResponse {}





