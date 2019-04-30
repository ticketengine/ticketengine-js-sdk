import {ApiResponse, CommandData} from "../call";



export enum CapacityAllocation {
    static = 'STATIC',
    dynamic = 'DYNAMIC',
}
export enum CapacityLocationAllocation {
    all = 'ALL',
    priority = 'PRIORITY',
    select = 'SELECT',
}
export enum CapacityType {
    nonRegulated = 'NON_REGULATED',
    seated = 'SEATED',
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
}

export interface AddCapacityArguments extends CommandData {
    aggregateId: string;
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

export interface AddCapacityResponse extends ApiResponse {
    capacityId: string;
}

export interface AddAccessDefinitionResponse extends ApiResponse {
    accessDefinitionId: string;
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