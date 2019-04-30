import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOrderArguments extends CommandData {
    salesChannelId: string;
    registerId: string;
    customerId?: string;
}

export interface AddAccessToCartArguments extends CommandData {
    aggregateId: string;
    eventManagerId: string;
    eventId: string;
    accessDefinitionId: string;
    capacityLocation: string;
}

export interface AddProductToCartArguments extends CommandData {
    aggregateId: string;
    productId: string;
    productVariantId: string;
}

export interface ReserveAccessInCartArguments extends CommandData {
    aggregateId: string;
    orderLineItemId: string;
    accessId: string;
}

export interface ReserveProductInCartArguments extends CommandData {
    aggregateId: string;
    orderLineItemId: string;
}

export interface CompleteItemInCartArguments extends CommandData {
    aggregateId: string;
    orderLineItemId: string;
}

export interface RemoveItemFromCartArguments extends CommandData {
    aggregateId: string;
    orderLineItemId: string;
}

export interface CancelOrderArguments extends CommandData {
    aggregateId: string;
}




///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOrderResponse extends ApiResponse {
    orderId: string;
}

export interface AddAccessToCartResponse extends ApiResponse {
    orderLineItemId: string;
}

export interface AddProductToCartResponse extends ApiResponse {
    orderLineItemId: string;
}

export interface ReserveAccessInCartResponse extends ApiResponse {
}

export interface ReserveProductInCartResponse extends ApiResponse {
}

export interface CompleteItemInCartResponse extends ApiResponse {
}

export interface RemoveItemFromCartResponse extends ApiResponse {
}

export interface CancelOrderResponse extends ApiResponse {
}


