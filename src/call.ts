

// export interface ApiCallOptions {
//     [argument: string]: unknown;
// }

export enum ApiResponseStatus {
    success,
    error,
    fail,
}

export interface CommandData {

}

export interface QueryData {

}

export interface ApiResponse {
    status: ApiResponseStatus;
    data: any;
}