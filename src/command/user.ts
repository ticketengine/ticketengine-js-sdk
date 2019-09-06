import {ApiResponse, CommandData} from "../call";


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////
export interface CreateUserArguments extends CommandData {
    username: string;
    password: string;
    scopes: Array<string>;
}

export interface ChangeUserScopeArguments extends CommandData {
    id: string;
    scopes: Array<string>;
}

export interface ChangeUserPasswordArguments extends CommandData {
    id: string;
    password: string;
}

export interface EnableUserArguments extends CommandData {
    id: string;
}

export interface DisableUserArguments extends CommandData {
    id: string;
}




///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface CreateUserResponse extends ApiResponse {
    userId: string;
}

export interface ChangeUserScopeResponse extends ApiResponse {}

export interface ChangeUserPasswordResponse extends ApiResponse {}

export interface EnableUserResponse extends ApiResponse {}

export interface DisableUserResponse extends ApiResponse {}



