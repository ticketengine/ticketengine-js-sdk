import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateMembershipDefinitionArguments extends CommandData {
    name: string;
    description?: string;
    validityPeriod: any;
    tags?: Array<string>;
}

export interface RenameMembershipDefinitionArguments extends CommandData {
    aggregateId: string;
    name?: string;
    description?: string;
}

export interface RescheduleMembershipDefinitionValidityArguments extends CommandData {
    aggregateId: string;
    validityPeriod: any;
}

export interface ChangeMembershipDefinitionTagsArguments extends CommandData {
    aggregateId: string;
    tags: Array<string>;
}

export interface ReserveMembershipArguments extends CommandData {
    aggregateId: string;
    orderId: string;
    orderLineItemId: string;
    customerId?: string;
}

export interface GrantMembershipArguments extends CommandData {
    aggregateId: string;
    membershipId: string;
}

export interface ReturnMembershipArguments extends CommandData {
    aggregateId: string;
    membershipId: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateMembershipDefinitionResponse extends ApiResponse {
    data: {
        membershipDefinitionId: string;
    }
}
export interface RenameMembershipDefinitionResponse extends ApiResponse {}
export interface RescheduleMembershipDefinitionValidityResponse extends ApiResponse {}
export interface ChangeMembershipDefinitionTagsResponse extends ApiResponse {}
export interface ReserveMembershipResponse extends ApiResponse {
    data: {
        membershipId: string;
    }
}
export interface GrantMembershipResponse extends ApiResponse {}
export interface ReturnMembershipResponse extends ApiResponse {}

