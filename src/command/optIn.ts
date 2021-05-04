import {ApiResponse, CommandData} from "../call";


export interface TextTranslation {
    languageCode: string;
    text: string;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOptInDefinitionArguments extends CommandData {
    question: string;
    conditions?: any;
    questionTranslations?: TextTranslation[];
}

export interface ChangeOptInDefinitionArguments extends CommandData {
    id: string;
    question: string;
    conditions?: any;
    questionTranslations?: TextTranslation[];
}

export interface RemoveOptInDefinitionArguments extends CommandData {
    id: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateOptInDefinitionResponse extends ApiResponse {
    data: {
        optInDefinitionId: string;
    }
}

export interface ChangeOptInDefinitionResponse extends ApiResponse {
}

export interface RemoveOptInDefinitionResponse extends ApiResponse {
}
