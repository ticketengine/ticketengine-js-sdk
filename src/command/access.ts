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
    location?: string;
    start: Date;
    end: Date;
    tags?: Array<string>
    externalIds?: Array<{id: string, description: string}>
}
export interface CreateEventManagerAndPlanEventArguments extends CommandData {
    name: string;
    description?: string;
    location?: string;
    start: Date;
    end: Date;
    tags?: Array<string>
    externalIds?: Array<{id: string, description: string}>
    templateId?: string
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
export interface RelocateEventArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    location: string;
}
export interface CancelEventArguments extends CommandData {
    aggregateId: string;
    eventId: string;
}
export interface PublishEventArguments extends CommandData {
    aggregateId: string;
    eventId: string;
}
export interface DraftEventArguments extends CommandData {
    aggregateId: string;
    eventId: string;
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
export interface ApplyEventTemplateArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    templateId: string;
}
export interface DetachEventTemplateArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    templateId: string;
}
export interface ApplyEventCapacityTemplateArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    templateId: string;
}
export interface DetachEventCapacityTemplateArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    templateId: string;
}
export interface ApplyEventAccessTemplateArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    templateId: string;
}
export interface DetachEventAccessTemplateArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    templateId: string;
}


// capacity
export interface AddCapacityArguments extends CommandData {
    aggregateId: string;
    capacity: any;
}
export interface ChangeCapacityArguments extends CommandData {
    aggregateId: string;
    capacityId: string;
    capacity: any;
}


// access definition
export interface AddAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    name: string;
    description?: string;
    start?: Date;
    end?: Date;
    accessConditions: any;
    capacityLocations: Array<string>;
    capacityLocationAllocation: CapacityLocationAllocation;
    tags?: Array<string>;
    limit?: number;
    isTemplate?: boolean;
}
export interface RemoveAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    accessDefinitionId: string;
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


// access
export interface ReserveAccessArguments extends CommandData {
    aggregateId: string;
    eventId: string;
    orderId: string;
    accessDefinitionId: string;
    requestedConditionPath: Array<string>;
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


// event template
export interface CreateEventTemplateArguments extends CommandData {
    aggregateId: string;
    name: string;
    description?: string;
}
export interface RenameEventTemplateArguments extends CommandData {
    aggregateId: string;
    name?: string;
    description?: string;
}
export interface AddEventTemplateCapacityArguments extends CommandData {
    aggregateId: string;
    capacity: any;
}
export interface ChangeEventTemplateCapacityArguments extends CommandData {
    aggregateId: string;
    capacity: any;
}
export interface AddEventTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    name: string;
    description?: string;
    start?: Date;
    end?: Date;
    accessConditions: any;
    capacityLocations: Array<string>;
    capacityLocationAllocation: CapacityLocationAllocation;
    tags?: Array<string>;
    limit?: number;
}
export interface RemoveEventTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
}
export interface RenameEventTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    name?: string;
    description?: string;
}
export interface RescheduleEventTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    start: Date;
    end: Date;
}
export interface ChangeEventTemplateAccessDefinitionCapacityLocationAllocationArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    capacityLocationAllocation: CapacityLocationAllocation;
}
export interface ChangeEventTemplateAccessDefinitionConditionsArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    accessConditions: any;
}
export interface ChangeEventTemplateAccessDefinitionTagsArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    tags: Array<string>;
}
export interface ChangeEventTemplateAccessDefinitionUseLimitArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    limit: number;
}
export interface AssignEventTemplateAccessDefinitionLocationArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    capacityLocations: Array<string>;
}
export interface DuplicateEventTemplateArguments extends CommandData {
    aggregateId: string;
}


// event capacity template
export interface CreateEventCapacityTemplateArguments extends CommandData {
    aggregateId: string;
    name: string;
    description?: string;
}
export interface RenameEventCapacityTemplateArguments extends CommandData {
    aggregateId: string;
    name?: string;
    description?: string;
}
export interface AddEventCapacityTemplateCapacityArguments extends CommandData {
    aggregateId: string;
    capacity: any;
}
export interface ChangeEventCapacityTemplateCapacityArguments extends CommandData {
    aggregateId: string;
    capacity: any;
}
export interface DuplicateEventCapacityTemplateArguments extends CommandData {
    aggregateId: string;
}


// event access template
export interface CreateEventAccessTemplateArguments extends CommandData {
    aggregateId: string;
    name: string;
    description?: string;
}
export interface RenameEventAccessTemplateArguments extends CommandData {
    aggregateId: string;
    name?: string;
    description?: string;
}
export interface AddEventAccessTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    name: string;
    description?: string;
    start?: Date;
    end?: Date;
    accessConditions: any;
    capacityLocations: Array<string>;
    capacityLocationAllocation: CapacityLocationAllocation;
    tags?: Array<string>;
    limit?: number;
}
export interface RemoveEventAccessTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
}
export interface RenameEventAccessTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    name?: string;
    description?: string;
}
export interface RescheduleEventAccessTemplateAccessDefinitionArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    start: Date;
    end: Date;
}
export interface ChangeEventAccessTemplateAccessDefinitionCapacityLocationAllocationArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    capacityLocationAllocation: CapacityLocationAllocation;
}
export interface ChangeEventAccessTemplateAccessDefinitionConditionsArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    accessConditions: any;
}
export interface ChangeEventAccessTemplateAccessDefinitionTagsArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    tags: Array<string>;
}
export interface ChangeEventAccessTemplateAccessDefinitionUseLimitArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    limit: number;
}
export interface AssignEventAccessTemplateAccessDefinitionLocationArguments extends CommandData {
    aggregateId: string;
    accessDefinitionId: string;
    capacityLocations: Array<string>;
}
export interface DuplicateEventAccessTemplateArguments extends CommandData {
    aggregateId: string;
}




///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateEventManagerResponse extends ApiResponse {
    data: {
        eventManagerId: string;
    }
}
export interface PlanEventResponse extends ApiResponse {
    data: {
        eventId: string;
    }
}
export interface CreateEventManagerAndPlanEventResponse extends ApiResponse {
    data: {
        eventManagerId: string;
        eventId: string;
    }
}
export interface RenameEventResponse extends ApiResponse {}
export interface RescheduleEventResponse extends ApiResponse {}
export interface RelocateEventResponse extends ApiResponse {}
export interface CancelEventResponse extends ApiResponse {}
export interface PublishEventResponse extends ApiResponse {}
export interface DraftEventResponse extends ApiResponse {}
export interface AssignEventTagResponse extends ApiResponse {}
export interface RevokeEventTagResponse extends ApiResponse {}
export interface ChangeEventTagsResponse extends ApiResponse {}
export interface AddEventExternalIdResponse extends ApiResponse {}
export interface RemoveEventExternalIdResponse extends ApiResponse {}
export interface ChangeEventExternalIdsResponse extends ApiResponse {}
export interface ApplyEventTemplateResponse extends ApiResponse {}
export interface DetachEventTemplateResponse extends ApiResponse {}
export interface ApplyEventCapacityTemplateResponse extends ApiResponse {}
export interface DetachEventCapacityTemplateResponse extends ApiResponse {}
export interface ApplyEventAccessTemplateResponse extends ApiResponse {}
export interface DetachEventAccessTemplateResponse extends ApiResponse {}

// capacity
export interface AddCapacityResponse extends ApiResponse {
    data: {
        capacityId: string;
    }
}
export interface ChangeCapacityResponse extends ApiResponse {}


// access definition
export interface AddAccessDefinitionResponse extends ApiResponse {
    data: {
        accessDefinitionId: string;
    }

}
export interface RemoveAccessDefinitionResponse extends ApiResponse {}
export interface RenameAccessDefinitionResponse extends ApiResponse {}
export interface RescheduleAccessDefinitionResponse extends ApiResponse {}
export interface ChangeAccessDefinitionConditionsResponse extends ApiResponse {}
export interface AddAccessDefinitionCapacityLocationResponse extends ApiResponse {}
export interface RemoveAccessDefinitionCapacityLocationResponse extends ApiResponse {}
export interface ChangeAccessDefinitionCapacityLocationsResponse extends ApiResponse {}
export interface ChangeAccessDefinitionCapacityLocationAllocationResponse extends ApiResponse {}
export interface ChangeAccessDefinitionUseLimitResponse extends ApiResponse {}
export interface AssignAccessDefinitionTagResponse extends ApiResponse {}
export interface RevokeAccessDefinitionTagResponse extends ApiResponse {}
export interface ChangeAccessDefinitionTagsResponse extends ApiResponse {}
export interface MarkAccessDefinitionAsTemplateResponse extends ApiResponse {}


// access
export interface ReserveAccessResponse extends ApiResponse {
    data: {
        access: Array<{
            accessId: string;
            status: string;
        }>;
    };
}
export interface GrantAccessResponse extends ApiResponse {}
export interface ReturnAccessResponse extends ApiResponse {}
export interface UseAccessResponse extends ApiResponse {}


// event template
export interface CreateEventTemplateResponse extends ApiResponse {
    data: {
        eventTemplateId: string;
    };
}
export interface RenameEventTemplateResponse extends ApiResponse {}
export interface AddEventTemplateCapacityResponse extends ApiResponse {
    data: {
        capacityId: string;
    }
}
export interface ChangeEventTemplateCapacityResponse extends ApiResponse {}
export interface AddEventTemplateAccessDefinitionResponse extends ApiResponse {
    data: {
        accessDefinitionId: string;
    }
}
export interface RemoveEventTemplateAccessDefinitionResponse extends ApiResponse {}
export interface RenameEventTemplateAccessDefinitionResponse extends ApiResponse {}
export interface RescheduleEventTemplateAccessDefinitionResponse extends ApiResponse {}
export interface ChangeEventTemplateAccessDefinitionCapacityLocationAllocationResponse extends ApiResponse {}
export interface ChangeEventTemplateAccessDefinitionConditionsResponse extends ApiResponse {}
export interface ChangeEventTemplateAccessDefinitionTagsResponse extends ApiResponse {}
export interface ChangeEventTemplateAccessDefinitionUseLimitResponse extends ApiResponse {}
export interface AssignEventTemplateAccessDefinitionLocationResponse extends ApiResponse {}
export interface DuplicateEventTemplateResponse extends ApiResponse {
    data: {
        eventTemplateId: string;
    };
}


// event capacity template
export interface CreateEventCapacityTemplateResponse extends ApiResponse {
    data: {
        eventCapacityTemplateId: string;
    };
}
export interface RenameEventCapacityTemplateResponse extends ApiResponse {}
export interface AddEventCapacityTemplateCapacityResponse extends ApiResponse {
    data: {
        capacityId: string;
    }
}
export interface ChangeEventCapacityTemplateCapacityResponse extends ApiResponse {}
export interface DuplicateEventCapacityTemplateResponse extends ApiResponse {
    data: {
        eventCapacityTemplateId: string;
    };
}


// event access template
export interface CreateEventAccessTemplateResponse extends ApiResponse {
    data: {
        eventAccessTemplateId: string;
    };
}
export interface RenameEventAccessTemplateResponse extends ApiResponse {}
export interface AddEventAccessTemplateAccessDefinitionResponse extends ApiResponse {
    data: {
        accessDefinitionId: string;
    }
}
export interface RemoveEventAccessTemplateAccessDefinitionResponse extends ApiResponse {}
export interface RenameEventAccessTemplateAccessDefinitionResponse extends ApiResponse {}
export interface RescheduleEventAccessTemplateAccessDefinitionResponse extends ApiResponse {}
export interface ChangeEventAccessTemplateAccessDefinitionCapacityLocationAllocationResponse extends ApiResponse {}
export interface ChangeEventAccessTemplateAccessDefinitionConditionsResponse extends ApiResponse {}
export interface ChangeEventAccessTemplateAccessDefinitionTagsResponse extends ApiResponse {}
export interface ChangeEventAccessTemplateAccessDefinitionUseLimitResponse extends ApiResponse {}
export interface AssignEventAccessTemplateAccessDefinitionLocationResponse extends ApiResponse {}
export interface DuplicateEventAccessTemplateResponse extends ApiResponse {
    data: {
        eventAccessTemplateId: string;
    };
}



