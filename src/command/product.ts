import {ApiResponse, CommandData} from "../call";
import {CartOperation, CartOperationType} from "./order";


// export enum ApiSource {
//     creditAccount = 'CreditAccount',
// }
//
// export interface ApiConfig {
//     source: ApiSource;
// }
//
// export interface CreditAccountConfig extends ApiConfig {
//     currencyCode: string;
//     amount: number;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateProductDefinitionArguments extends CommandData {
    name: string;
    description?: string;
    productConditions: any;
    apiConfig: any;
    tags?: Array<string>;
}

export interface PublishProductDefinitionArguments extends CommandData {
    aggregateId: string;
}

export interface DraftProductDefinitionArguments extends CommandData {
    aggregateId: string;
}

export interface RenameProductDefinitionArguments extends CommandData {
    aggregateId: string;
    name?: string;
    description?: string;
}

export interface ReconfigureProductDefinitionArguments extends CommandData {
    aggregateId: string;
    apiConfig: any;
}

export interface ChangeProductDefinitionConditionsArguments extends CommandData {
    aggregateId: string;
    productConditions: any;
}

export interface ChangeProductDefinitionTagsArguments extends CommandData {
    aggregateId: string;
    tags: Array<string>;
}

export interface ReserveProductArguments extends CommandData {
    aggregateId: string;
    orderId: string;
    orderLineItemId: string;
    requestedConditionPath: Array<string>;
    productVariantId?: string;
    customerId?: string;
}

export interface GrantProductArguments extends CommandData {
    aggregateId: string;
    productId: string;
}

export interface ReturnProductArguments extends CommandData {
    aggregateId: string;
    productId: string;
    orderId: string;
    orderLineItemId: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateProductDefinitionResponse extends ApiResponse {
    data: {
        productDefinitionId: string;
    }
}
export interface PublishProductDefinitionResponse extends ApiResponse {}
export interface DraftProductDefinitionResponse extends ApiResponse {}
export interface RenameProductDefinitionResponse extends ApiResponse {}
export interface ReconfigureProductDefinitionResponse extends ApiResponse {}
export interface ChangeProductDefinitionConditionsResponse extends ApiResponse {}
export interface ChangeProductDefinitionTagsResponse extends ApiResponse {}
export interface ReserveProductResponse extends ApiResponse {
    data: {
        productId: string;
    }
}
export interface GrantProductResponse extends ApiResponse {}
export interface ReturnProductResponse extends ApiResponse {}

