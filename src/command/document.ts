import {ApiResponse, CommandData} from "../call";
import {CartOperationType} from "./order";


export interface Document {
    id: string;
    url: string;
    fileName: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Command arguments
///////////////////////////////////////////////////////////////////////////////////////////////////


export interface CreateDocumentTemplateArguments extends CommandData {
    name: string;
    type: string;
    html: string;
    paperSize: string;
    paperOrientation: string;
}

export interface ChangeDocumentTemplateArguments extends CommandData {
    id: string;
    name: string;
    type: string;
    html: string;
    paperSize: string;
    paperOrientation: string;
}

export interface RemoveDocumentTemplateArguments extends CommandData {
    id: string;
}

export interface CreateDocumentArguments extends CommandData {
    templateId: string;
    ids: string[];
    multiple: boolean;
}



///////////////////////////////////////////////////////////////////////////////////////////////////
// Command responses
///////////////////////////////////////////////////////////////////////////////////////////////////

export interface CreateDocumentTemplateResponse extends ApiResponse {
    data: {
        templateId: string;
    }
}

export interface ChangeDocumentTemplateResponse extends ApiResponse {
}

export interface RemoveDocumentTemplateResponse extends ApiResponse {
}

export interface CreateDocumentResponse extends ApiResponse {
    data: {
        documents: Document[];
    }
}
