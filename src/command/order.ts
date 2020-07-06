import {ApiResponse, CommandData} from "../call";


export enum CartOperationType {
    AddAccessItem = 'AddAccessItem',
    RemoveItem = 'RemoveItem',
}

export interface CartOperation {
    operation: CartOperationType;
}

export interface AddAccessItem extends CartOperation {
    operation: CartOperationType;
    data: {
        eventManagerId: string;
        eventId: string;
        accessDefinitionId: string;
        requestedConditionPath: Array<string>;
        capacityLocationPath?: Array<string>;
    };
}

export interface RemoveItem extends CartOperation {
    operation: CartOperationType;
    data: {
        orderLineItemId: string;
    };
}


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
    capacityLocationPath?: Array<string>;
    requestedConditionPath: Array<string>;
    // requestedConditionPath: string;
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
export interface ReturnItemInCartArguments extends CommandData {
    aggregateId: string;
    orderLineItemId: string;
}
export interface CancelOrderArguments extends CommandData {
    aggregateId: string;
}
export interface CheckoutOrderArguments extends CommandData {
    aggregateId: string;
    customerEmail?: string;
}
export interface CompleteOrderArguments extends CommandData {
    aggregateId: string;
}
export interface ReserveOrderArguments extends CommandData {
    aggregateId: string;
    timeoutOn?: string;
    customerEmail?: string;
}
export interface AddOrderTokenArguments extends CommandData {
    aggregateId: string;
    token: string;
}
export interface AssignOrderToCustomerArguments extends CommandData {
    aggregateId: string;
    customerId: string;
}
export interface UnassignOrderFromCustomerArguments extends CommandData {
    aggregateId: string;
}
export interface CartBatchOperationArguments extends CommandData {
    aggregateId: string;
    operations: Array<CartOperation>;
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
    data: {
        orderId: string;
    }
}
export interface AddAccessToCartResponse extends ApiResponse {
    data: {
        orderLineItemId: string;
    }
}
export interface AddProductToCartResponse extends ApiResponse {
    data: {
        orderLineItemId: string;
    }
}
export interface ReserveAccessInCartResponse extends ApiResponse {}
export interface ReserveProductInCartResponse extends ApiResponse {}
export interface CompleteItemInCartResponse extends ApiResponse {}
export interface RemoveItemFromCartResponse extends ApiResponse {}
export interface ReturnItemInCartResponse extends ApiResponse {}
export interface CancelOrderResponse extends ApiResponse {}
export interface CheckoutOrderResponse extends ApiResponse {}
export interface CompleteOrderResponse extends ApiResponse {}
export interface ReserveOrderResponse extends ApiResponse {}
export interface AddOrderTokenResponse extends ApiResponse {}
export interface AssignOrderToCustomerResponse extends ApiResponse {}
export interface UnassignOrderFromCustomerResponse extends ApiResponse {}
export interface CartBatchOperationResponse extends ApiResponse {
    data: {
        orderLineItemIds: string[];
    }
}

export interface AddTimeoutSettingResponse extends ApiResponse {
    data: {
        id: string;
    }
}
export interface ChangeTimeoutSettingResponse extends ApiResponse {}
export interface RemoveTimeoutSettingResponse extends ApiResponse {}