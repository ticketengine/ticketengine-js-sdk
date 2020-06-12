import {ApiResponse, CommandData} from "../call";



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateCustomerArguments extends CommandData {
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    email?: string;
    gender?: string;
    tags?: Array<string>;
}

export interface ChangeCustomerArguments extends CommandData {
    id: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    email?: string;
    gender?: string;
    tags?: Array<string>;
}

export interface RemoveCustomerArguments extends CommandData {
    id: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateCustomerResponse extends ApiResponse {
    data: {
        customerId: string;
    }
}

export interface ChangeCustomerResponse extends ApiResponse {
}

export interface RemoveCustomerResponse extends ApiResponse {
}