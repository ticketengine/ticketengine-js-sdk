import {ApiResponse, CommandData} from "../call";


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////
export interface CreateTagArguments extends CommandData {
    name: string;
}

export interface RenameTagArguments extends CommandData {
    aggregateId: string;
    name: string;
}

export interface RemoveTagArguments extends CommandData {
    aggregateId: string;
}




///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface CreateTagResponse extends ApiResponse {
    data: {
        tagId: string;
    }
}

export interface RenameTagResponse extends ApiResponse {}

export interface RemoveTagResponse extends ApiResponse {}

