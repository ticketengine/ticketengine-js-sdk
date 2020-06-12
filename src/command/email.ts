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

export interface AddEmailTemplateArguments extends CommandData {
    name: string;
    from: string;
    subject: string;
    template: string;
    senderName?: string;
    cc?: string;
    bcc?: string;
    tracking?: boolean;
    attachment?: Array<EmailTemplateAttachment>;
}

export interface EditEmailTemplateArguments extends CommandData {
    id: string;
    name: string;
    from: string;
    subject: string;
    template: string;
    senderName?: string;
    cc?: string;
    bcc?: string;
    tracking?: boolean;
    attachment?: Array<EmailTemplateAttachment>;
}

export interface RemoveEmailTemplateArguments extends CommandData {
    id: string;
}

export interface SendEmailTemplateArguments extends CommandData {
    templateId: string;
    email: string;
    orderId?: string;
    customerId?: string;
}

export interface EmailTemplateAttachment {
    filename: string;
    template: string;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface AddMailgunClientSettingsResponse extends ApiResponse {
}

export interface EditMailgunClientSettingsResponse extends ApiResponse {
}

export interface SendEmailResponse extends ApiResponse {
    data: {
        emailId: string;
    }
}

export interface AddEmailTemplateResponse extends ApiResponse {
    data: {
        templateId: string;
    }
}

export interface EditEmailTemplateResponse extends ApiResponse {
}

export interface RemoveEmailTemplateResponse extends ApiResponse {
}

export interface SendEmailTemplateResponse extends ApiResponse {
}