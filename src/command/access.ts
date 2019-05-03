import {ApiResponse, CommandData} from "../call";



export enum CapacityAllocation {
    static = 'static',
    dynamic = 'dynamic',
}
export enum CapacityLocationAllocation {
    all = 'all',
    priority = 'priority',
    select = 'select',
}
export enum CapacityType {
    nonRegulated = 'nonRegulated',
    seated = 'seated',
}
export enum ConditionOperators {
    and = 'and',
    or = 'or',
    noneOf = 'noneOf',
}
export enum ConditionFieldOperators {
    equals = '===',
    notEquals = '!==',
    greaterThen = 'gt',
    greaterThenEqual = 'gte',
    lessThen = 'lt',
    lessThenEqual = 'lte',
    contains = 'contains',
    containsAll = 'containsAll',
    containsNot = 'containsNot',
}
export enum ConditionFacts {
    price = 'price',
    itemsInCart = 'itemsInCart',
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface CreateEventManagerArguments extends CommandData {
    capacityAllocation: CapacityAllocation;
}

export interface PlanEventArguments extends CommandData {
    aggregateId: string;
    name: string;
    description?: string;
    start: Date;
    end: Date;
    tags: Array<string>
    externalIds: Array<{id: string, description: string}>
}

export interface RenameEventArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    name?: string;
    description?: string;
}

export interface RescheduleEventArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    start: Date;
    end: Date;
}

export interface AssignEventTagArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    tag: string;
}

export interface RevokeEventTagArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    tag: string;
}

export interface ChangeEventTagsArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    tags: Array<string>
}

export interface AddEventExternalIdArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    tag: string;
}

export interface RemoveEventExternalIdArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    externalId: string;
    description: string;
}

export interface ChangeEventExternalIdsArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    externalId: Array<{id: string, description: string}>
}

export interface AddCapacityArguments extends CommandData {
    aggregateId: string;
    capacity: any;
}

export interface ChangeCapacityArguments extends CommandData {
    aggregateId: string;
    capacityId: string;
    capacity: any;
}

export interface AddAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    name: string;
    description?: string;
    start: Date;
    end: Date;
    accessConditions: any;
    capacityLocations: Array<string>;
    capacityLocationAllocation: CapacityLocationAllocation;
    tags?: Array<string>;
    limit?: number;
    isTemplate?: boolean;
}

export interface RenameAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    name?: string;
    description?: string;
}

export interface RescheduleAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    start: Date;
    end: Date;
}

export interface ChangeAccessDefinitionConditionsArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    accessConditions: any;
}

export interface AddAccessDefinitionCapacityLocationArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    capacityLocation: string;
}

export interface RemoveAccessDefinitionCapacityLocationArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    capacityLocation: string;
}

export interface ChangeAccessDefinitionCapacityLocationsArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    capacityLocations: Array<string>;
}

export interface ChangeAccessDefinitionCapacityLocationAllocationArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    capacityLocationAllocation: string;
}

export interface ChangeAccessDefinitionUseLimitArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    useLimit: number;
}

export interface AssignAccessDefinitionTagArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    tag: string;
}

export interface RevokeAccessDefinitionTagArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    tag: string;
}

export interface ChangeAccessDefinitionTagsArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
    tags: Array<string>;
}

export interface MarkAccessDefinitionAsTemplateArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
}

export interface ReserveAccessArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    orderId: string;
    accessDefinitionId: string;
}

export interface GrantAccessArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessId: string;
}

export interface ReturnAccessArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessId: string;
}

export interface UseAccessArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    token: string;
}





///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateEventManagerResponse extends ApiResponse {
    eventManagerId: string;
}

export interface PlanEventResponse extends ApiResponse {
    eventId: string;
}

export interface RenameEventResponse extends ApiResponse {
}

export interface RescheduleEventResponse extends ApiResponse {
}

export interface AssignEventTagResponse extends ApiResponse {
}

export interface RevokeEventTagResponse extends ApiResponse {
}

export interface ChangeEventTagsResponse extends ApiResponse {
}

export interface AddEventExternalIdResponse extends ApiResponse {
}

export interface RemoveEventExternalIdResponse extends ApiResponse {
}

export interface ChangeEventExternalIdsResponse extends ApiResponse {
}

export interface AddCapacityResponse extends ApiResponse {
    capacityId: string;
}

export interface ChangeCapacityResponse extends ApiResponse {
}

export interface AddAccessDefinitionResponse extends ApiResponse {
    accessDefinitionId: string;
}

export interface RenameAccessDefinitionResponse extends ApiResponse {
}

export interface RescheduleAccessDefinitionResponse extends ApiResponse {
}

export interface ChangeAccessDefinitionConditionsResponse extends ApiResponse {
}

export interface AddAccessDefinitionCapacityLocationResponse extends ApiResponse {
}

export interface RemoveAccessDefinitionCapacityLocationResponse extends ApiResponse {
}

export interface ChangeAccessDefinitionCapacityLocationsResponse extends ApiResponse {
}

export interface ChangeAccessDefinitionCapacityLocationAllocationResponse extends ApiResponse {
}

export interface ChangeAccessDefinitionUseLimitResponse extends ApiResponse {
}

export interface AssignAccessDefinitionTagResponse extends ApiResponse {
}

export interface RevokeAccessDefinitionTagResponse extends ApiResponse {
}

export interface ChangeAccessDefinitionTagsResponse extends ApiResponse {
}

export interface MarkAccessDefinitionAsTemplateResponse extends ApiResponse {
}

export interface ReserveAccessResponse extends ApiResponse {
    access: Array<{
        accessId: string;
        status: string;
    }>;
}

export interface GrantAccessResponse extends ApiResponse {
}

export interface ReturnAccessResponse extends ApiResponse {
}

export interface UseAccessResponse extends ApiResponse {
}