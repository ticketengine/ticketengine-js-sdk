import {ApiResponse, CommandData} from "../call";



// interface DeliveryContentAttachment {
//     template: string;
//     filename: string;
// }

// interface DeliveryContent {
//     template: string;
//     subject: string;
//     from: string;
//     senderName?: string;
//     attachments?: Array<DeliveryContentAttachment>;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateSalesChannelArguments extends CommandData {
    name: string;
    description?: string;
}

export interface RenameSalesChannelArguments extends CommandData {
    aggregateId: string;
    name?: string;
    description?: string;
}

export interface AddRegisterArguments extends CommandData {
    aggregateId: string;
    name: string;
    description?: string;
}

export interface RenameRegisterArguments extends CommandData {
    aggregateId: string;
    registerId: string;
    name?: string;
    description?: string;
}

export interface RemoveRegisterArguments extends CommandData {
    aggregateId: string;
    registerId: string;
}

export interface AddDeliveryDefinitionArguments extends CommandData {
    // aggregateId: string;
    name: string;
    type: string;
    eventType: string;
    templateId: string;
    salesChannelId: string;
    registerId: string;
    // description?: string;
    // deliveryContent: DeliveryContent;
    // deliveryConditions: any;
}

export interface EditDeliveryDefinitionArguments extends CommandData {
    id: string;
    name: string;
    type: string;
    eventType: string;
    templateId: string;
    salesChannelId: string;
    registerId: string;
}

export interface RemoveDeliveryDefinitionArguments extends CommandData {
    id: string;
}

// export interface ChangeDeliveryDefinitionConditionArguments extends CommandData {
//     aggregateId: string;
//     deliveryDefinitionId: string;
//     deliveryConditions: any;
// }
//
// export interface ChangeDeliveryDefinitionContentArguments extends CommandData {
//     aggregateId: string;
//     deliveryDefinitionId: string;
//     deliveryContent: DeliveryContent;
// }
//
// export interface RenameDeliveryDefinitionArguments extends CommandData {
//     aggregateId: string;
//     deliveryDefinitionId: string;
//     name?: string;
//     description?: string;
// }
//
// export interface CreateEmailDeliveryArguments extends CommandData {
//     aggregateId: string;
//     deliveryDefinitionId: string;
//     customerEmail: string;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateSalesChannelResponse extends ApiResponse {
    salesChannelId: string;
}
export interface RenameSalesChannelResponse extends ApiResponse {}
export interface AddRegisterResponse extends ApiResponse {}
export interface RenameRegisterResponse extends ApiResponse {}
export interface RemoveRegisterResponse extends ApiResponse {}
export interface AddDeliveryDefinitionResponse extends ApiResponse {
    deliveryDefinitionId: string;
}
export interface EditDeliveryDefinitionResponse extends ApiResponse {}
export interface RemoveDeliveryDefinitionResponse extends ApiResponse {}

// export interface ChangeDeliveryDefinitionConditionResponse extends ApiResponse {
//
// }
//
// export interface ChangeDeliveryDefinitionContentResponse extends ApiResponse {
//
// }
//
// export interface RenameDeliveryDefinitionResponse extends ApiResponse {
//
// }
//
// export interface CreateEmailDeliveryResponse extends ApiResponse {
//
// }
