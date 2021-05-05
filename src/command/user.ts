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

export interface ChangeUserAllowedRegistersArguments extends CommandData {
    id: string;
    allowedRegisters: Array<string>;
}

export interface ChangeUserPasswordArguments extends CommandData {
    id: string;
    password: string;
}

export interface ResetUserPasswordArguments extends CommandData {
    password: string;
}

export interface EnableUserArguments extends CommandData {
    id: string;
}

export interface DisableUserArguments extends CommandData {
    id: string;
}

export interface GetAuthTokenArguments extends CommandData {
    grantType: string;
    clientId: string;
    clientSecret: string;
    scope: string;
    username?: string;
    password?: string;
    refreshToken?: string;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface CreateUserResponse extends ApiResponse {
    data: {
        userId: string;
    }
}
export interface ChangeUserScopeResponse extends ApiResponse {}
export interface ChangeUserAllowedRegistersResponse extends ApiResponse {}
export interface ChangeUserPasswordResponse extends ApiResponse {}
export interface ResetUserPasswordResponse extends ApiResponse {}
export interface EnableUserResponse extends ApiResponse {}
export interface DisableUserResponse extends ApiResponse {}
export interface GetAuthTokenResponse extends ApiResponse {
    token_type: string;
    expires_in: string;
    access_token: string;
    refresh_token: string;
}

