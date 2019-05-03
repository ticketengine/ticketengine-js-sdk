import {ApiResponse, QueryData} from "./call";




export interface Query extends QueryData {
    query: string;
}


export interface Event {
    id: string;
    eventManagerId: string;
    name: string;
    description: string;
    location: string;
    start: string;
    end: string;
    totalCapacity: number;
    availableCapacity: number;
    reservedCapacity: number;
    grantedCapacity: number;
    tags: Array<string>;
}

export interface Access {
    id: string;
    accessDefinitionId: string;
    eventManagerId: string;
    eventId: string;
    orderId: string;
    start: Date;
    end: Date;
    useLimit: number;
    totalUsed: number;
    location: string;
    status: string;
    tokens: Array<string>;
    conditions: object;
    satisfiedConditions: Array<string>
}

export interface AccessDefinition {
    id: string;
    eventManagerId: string;
    eventId: string;
    name: string;
    description: string;
    start: string;
    end: string;
    accessConditions: string;
    capacityLocations: Array<string>;
    capacityLocationAllocation: string;
    tags: Array<string>;
    useLimit: number;
    isTemplate: boolean;
}


export interface Order {
    id: string;
    salesChannelId: string;
    registerId: string;
    status: string;
}

export interface Price {
    conditionId: string;
    price: number;
    currency: string;
    description: string;
    taxes: Array<Tax>;
}


export interface Tax {
    value: number;
    type: string;
    description: string;
}


export interface Search {
    id: string;
    type: string;
    status: string;
    name: string;
    description: string;
    date: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface QueryResponse<T> extends ApiResponse {
    data: T;
}



