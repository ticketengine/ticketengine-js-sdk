import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface AddMailgunClientSettingsArguments extends CommandData {
    clientId: string;
    apiKey: string;
    domain: string;
    endPoint: string;
}

export interface EditMailgunClientSettingsArguments extends CommandData {
    clientId: string;
    apiKey: string;
    domain: string;
    endPoint: string;
}

export interface SendEmailArguments extends CommandData {
    from: string;
    senderName?: string;
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    body: string;
    tracking?: string;
    deliveryTime?: string;
    attachment?: string;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface AddMailgunClientSettingsResponse extends ApiResponse {
}

export interface EditMailgunClientSettingsResponse extends ApiResponse {
}

export interface SendEmailResponse extends ApiResponse {
    emailId: string;
}


