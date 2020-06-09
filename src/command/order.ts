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
    capacityLocationPath: string;
    requestedConditionPath: Array<string>;
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
export interface CheckoutOrderArguments extends CommandData {
    aggregateId: string;
    customerEmail: string;
}
export interface CompleteOrderArguments extends CommandData {
    aggregateId: string;
}
export interface AddOrderTokenArguments extends CommandData {
    aggregateId: string;
    token: string;
}


export interface AddTimeoutSettingArguments extends CommandData {
    salesChannelId: string;
    registerId: string;
    type: string;
    value: number;
}
export interface ChangeTimeoutSettingArguments extends CommandData {
    id: string;
    salesChannelId: string;
    registerId: string;
    type: string;
    value: number;
}
export interface RemoveTimeoutSettingArguments extends CommandData {
    id: string;
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
export interface ReserveAccessInCartResponse extends ApiResponse {}
export interface ReserveProductInCartResponse extends ApiResponse {}
export interface CompleteItemInCartResponse extends ApiResponse {}
export interface RemoveItemFromCartResponse extends ApiResponse {}
export interface CancelOrderResponse extends ApiResponse {}
export interface CheckoutOrderResponse extends ApiResponse {}
export interface CompleteOrderResponse extends ApiResponse {}
export interface AddOrderTokenResponse extends ApiResponse {}

export interface AddTimeoutSettingResponse extends ApiResponse {
    id: string;
}
export interface ChangeTimeoutSettingResponse extends ApiResponse {}
export interface RemoveTimeoutSettingResponse extends ApiResponse {}