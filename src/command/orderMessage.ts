import {ApiResponse, CommandData} from "../call";


export interface TextTranslation {
    languageCode: string;
    text: string;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOrderMessageDefinitionArguments extends CommandData {
    message: string;
    stages: string[];
    conditions?: any;
    textTranslations?: TextTranslation[];
}

export interface ChangeOrderMessageDefinitionArguments extends CommandData {
    id: string;
    message: string;
    stages: string[];
    conditions?: any;
    textTranslations?: TextTranslation[];
}

export interface RemoveOrderMessageDefinitionArguments extends CommandData {
    id: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOrderMessageDefinitionResponse extends ApiResponse {
    data: {
        orderMessageDefinitionId: string;
    }
}

export interface ChangeOrderMessageDefinitionResponse extends ApiResponse {
}

export interface RemoveOrderMessageDefinitionResponse extends ApiResponse {
}
