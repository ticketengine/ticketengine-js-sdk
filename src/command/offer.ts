import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOfferArguments extends CommandData {
    name: string;
    type: string;
    requestedConditionPath: string[];
    conditions?: any;
    eventManagerId?: string;
    eventId?: string;
    accessDefinitionId?: string;
    productDefinitionId?: string;
    productVariantId?: string;
}

export interface ChangeOfferArguments extends CommandData {
    id: string;
    name: string;
    type: string;
    requestedConditionPath: string[];
    conditions?: any;
    eventManagerId?: string;
    eventId?: string;
    accessDefinitionId?: string;
    productDefinitionId?: string;
    productVariantId?: string;
}

export interface RemoveOfferArguments extends CommandData {
    id: string;
}

export interface AcceptOfferArguments extends CommandData {
    aggregateId: string;
    offerId: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOfferResponse extends ApiResponse {
    data: {
        offerId: string;
    }
}
export interface ChangeOfferResponse extends ApiResponse {}
export interface RemoveOfferResponse extends ApiResponse {}
export interface AcceptOfferResponse extends ApiResponse {
    data: {
        orderLineItemId: string;
    }
}
