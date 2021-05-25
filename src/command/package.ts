import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreatePackageDefinitionArguments extends CommandData {
    name: string;
    description?: string;
    tags?: Array<string>;
}

export interface RenamePackageDefinitionArguments extends CommandData {
    aggregateId: string;
    name?: string;
    description?: string;
}

export interface ChangePackageDefinitionTagsArguments extends CommandData {
    aggregateId: string;
    tags: Array<string>;
}

export interface AddPackageDefinitionAccessArguments extends CommandData {
    aggregateId: string;
    eventManagerId: string;
    eventId: string;
    accessDefinitionId: string;
    requestedConditionPath: Array<string>;
    capacityLocationPath: string;
}

export interface AddPackageDefinitionProductArguments extends CommandData {
    aggregateId: string;
    productDefinitionId: string;
    requestedConditionPath: Array<string>;
    productVariantId: string;
}

export interface RemovePackageDefinitionAccessArguments extends CommandData {
    aggregateId: string;
    packageContentId: string;
}

export interface RemovePackageDefinitionProductArguments extends CommandData {
    aggregateId: string;
    packageContentId: string;
}

export interface RemovePackageDefinitionContentArguments extends CommandData {
    aggregateId: string;
    packageContentId: string;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreatePackageDefinitionResponse extends ApiResponse {
    data: {
        packageDefinitionId: string;
    }
}
export interface RenamePackageDefinitionResponse extends ApiResponse {}
export interface ChangePackageDefinitionTagsResponse extends ApiResponse {}
export interface AddPackageDefinitionAccessResponse extends ApiResponse {
    data: {
        packageContentId: string;
    }
}
export interface AddPackageDefinitionProductResponse extends ApiResponse {
    data: {
        packageContentId: string;
    }
}
export interface RemovePackageDefinitionAccessResponse extends ApiResponse {}
export interface RemovePackageDefinitionProductResponse extends ApiResponse {}
export interface RemovePackageDefinitionContentResponse extends ApiResponse {}
