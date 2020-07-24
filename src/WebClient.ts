import axios, {AxiosInstance, AxiosResponse} from 'axios';
// import { ApiCallOptions, ApiCallResult } from './apiCall';
// @ts-ignore
// const PQueue = require('p-queue');
import * as Promise from 'bluebird';
import * as moment from 'moment';
import {TaskQueue} from 'cwait';
// import {attach, RaxConfig} from 'retry-axios';
import {LoggerInterface} from './LoggerInterface';
import {Logger} from './Logger';
// import pRetry = require('p-retry');
// import * as pRetry from 'p-retry';
import {
    CreateEventManagerArguments,
    CreateEventManagerResponse,
    PlanEventArguments,
    PlanEventResponse,
    AddCapacityArguments,
    AddCapacityResponse,
    AddAccessDefinitionArguments,
    AddAccessDefinitionResponse,
    ReserveAccessArguments,
    ReserveAccessResponse,
    GrantAccessArguments,
    GrantAccessResponse,
    ReturnAccessArguments,
    ReturnAccessResponse,
    UseAccessArguments,
    UseAccessResponse,
    RenameEventArguments,
    RenameEventResponse,
    RescheduleEventArguments,
    RescheduleEventResponse,
    CancelEventArguments,
    CancelEventResponse,
    AssignEventTagArguments,
    AssignEventTagResponse,
    RevokeEventTagArguments,
    RevokeEventTagResponse,
    AddEventExternalIdArguments,
    AddEventExternalIdResponse,
    RemoveEventExternalIdArguments,
    RemoveEventExternalIdResponse,
    ChangeCapacityArguments,
    ChangeCapacityResponse,
    RenameAccessDefinitionArguments,
    RenameAccessDefinitionResponse,
    RescheduleAccessDefinitionArguments,
    RescheduleAccessDefinitionResponse,
    ChangeAccessDefinitionConditionsArguments,
    ChangeAccessDefinitionConditionsResponse,
    AddAccessDefinitionCapacityLocationArguments,
    AddAccessDefinitionCapacityLocationResponse,
    RemoveAccessDefinitionCapacityLocationArguments,
    RemoveAccessDefinitionCapacityLocationResponse,
    ChangeAccessDefinitionCapacityLocationAllocationArguments,
    ChangeAccessDefinitionCapacityLocationAllocationResponse,
    ChangeAccessDefinitionUseLimitArguments,
    ChangeAccessDefinitionUseLimitResponse,
    AssignAccessDefinitionTagArguments,
    AssignAccessDefinitionTagResponse,
    RevokeAccessDefinitionTagArguments,
    RevokeAccessDefinitionTagResponse,
    MarkAccessDefinitionAsTemplateArguments,
    MarkAccessDefinitionAsTemplateResponse,
    ChangeEventTagsArguments,
    ChangeEventTagsResponse,
    ChangeEventExternalIdsArguments,
    ChangeEventExternalIdsResponse,
    ChangeAccessDefinitionTagsArguments,
    ChangeAccessDefinitionTagsResponse,
    ChangeAccessDefinitionCapacityLocationsArguments,
    ChangeAccessDefinitionCapacityLocationsResponse,
    PublishEventArguments,
    PublishEventResponse,
    DraftEventArguments,
    DraftEventResponse,
    RelocateEventArguments,
    RelocateEventResponse,
    RemoveAccessDefinitionArguments,
    RemoveAccessDefinitionResponse,
    ApplyEventTemplateArguments,
    ApplyEventTemplateResponse,
    CreateEventManagerAndPlanEventArguments,
    CreateEventManagerAndPlanEventResponse,
    CreateEventTemplateArguments,
    CreateEventTemplateResponse,
    RenameEventTemplateArguments,
    RenameEventTemplateResponse,
    AddEventTemplateCapacityArguments,
    AddEventTemplateCapacityResponse,
    ChangeEventTemplateCapacityArguments,
    ChangeEventTemplateCapacityResponse,
    AddEventTemplateAccessDefinitionArguments,
    AddEventTemplateAccessDefinitionResponse,
    RemoveEventTemplateAccessDefinitionArguments,
    RemoveEventTemplateAccessDefinitionResponse,
    RescheduleEventTemplateAccessDefinitionArguments,
    RescheduleEventTemplateAccessDefinitionResponse,
    RenameEventTemplateAccessDefinitionArguments,
    RenameEventTemplateAccessDefinitionResponse,
    ChangeEventTemplateAccessDefinitionCapacityLocationAllocationArguments,
    ChangeEventTemplateAccessDefinitionCapacityLocationAllocationResponse,
    ChangeEventTemplateAccessDefinitionConditionsArguments,
    ChangeEventTemplateAccessDefinitionConditionsResponse,
    ChangeEventTemplateAccessDefinitionTagsArguments,
    ChangeEventTemplateAccessDefinitionTagsResponse,
    ChangeEventTemplateAccessDefinitionUseLimitArguments,
    ChangeEventTemplateAccessDefinitionUseLimitResponse,
    AssignEventTemplateAccessDefinitionLocationArguments,
    AssignEventTemplateAccessDefinitionLocationResponse,
    DetachEventTemplateArguments, DetachEventTemplateResponse
} from './command/access'; // tslint:disable-line:import-name
import {
    CreateOrderArguments,
    CreateOrderResponse,
    CancelOrderArguments,
    CancelOrderResponse,
    AddAccessToCartArguments,
    AddAccessToCartResponse,
    AddProductToCartArguments,
    AddProductToCartResponse,
    ReserveAccessInCartArguments,
    ReserveAccessInCartResponse,
    ReserveProductInCartArguments,
    ReserveProductInCartResponse,
    RemoveItemFromCartArguments,
    RemoveItemFromCartResponse,
    CompleteItemInCartArguments,
    CompleteItemInCartResponse,
    CheckoutOrderArguments,
    CheckoutOrderResponse,
    CompleteOrderArguments,
    CompleteOrderResponse,
    AddOrderTokenArguments,
    AddOrderTokenResponse,
    AddTimeoutSettingArguments,
    AddTimeoutSettingResponse,
    ChangeTimeoutSettingResponse,
    ChangeTimeoutSettingArguments,
    RemoveTimeoutSettingArguments,
    RemoveTimeoutSettingResponse,
    ReturnItemInCartResponse,
    ReturnItemInCartArguments,
    ReserveOrderArguments,
    ReserveOrderResponse,
    AssignOrderToCustomerArguments,
    AssignOrderToCustomerResponse,
    UnassignOrderFromCustomerArguments,
    UnassignOrderFromCustomerResponse,
    CartBatchOperationArguments,
    CartBatchOperationResponse
} from './command/order';
import {
    AddAdyenClientSettingsArguments,
    AddAdyenClientSettingsResponse,
    EditAdyenClientSettingsArguments,
    EditAdyenClientSettingsResponse,
    AddMollieClientSettingsArguments,
    AddMollieClientSettingsResponse,
    EditMollieClientSettingsArguments,
    EditMollieClientSettingsResponse,
    CreateCashPaymentArguments,
    CreateCashPaymentResponse,
    CreateAdyenPaymentSessionArguments,
    CreateAdyenPaymentSessionResponse,
    CreatePinPaymentArguments,
    CreatePinPaymentResponse,
    CreateMolliePaymentArguments,
    CreateMolliePaymentResponse
} from './command/payment';
import {
    AddMailgunClientSettingsArguments,
    AddMailgunClientSettingsResponse,
    EditMailgunClientSettingsArguments,
    EditMailgunClientSettingsResponse,
    SendEmailArguments,
    SendEmailResponse,
    AddEmailTemplateArguments,
    AddEmailTemplateResponse,
    EditEmailTemplateArguments,
    EditEmailTemplateResponse,
    RemoveEmailTemplateArguments,
    RemoveEmailTemplateResponse,
    SendEmailTemplateArguments,
    SendEmailTemplateResponse
} from './command/email';
// import {Access, AccessDefinition, Event, Order, QueryResponse, Search} from "./query";
import {QueryResponse, Search} from "./query";
import {
    AddDeliveryDefinitionArguments,
    AddDeliveryDefinitionResponse,
    CreateSalesChannelArguments,
    CreateSalesChannelResponse,
    RenameSalesChannelArguments,
    RenameSalesChannelResponse,
    RenameRegisterArguments,
    RenameRegisterResponse,
    RemoveRegisterArguments,
    RemoveRegisterResponse,
    AddRegisterArguments,
    AddRegisterResponse,
    EditDeliveryDefinitionArguments,
    EditDeliveryDefinitionResponse, RemoveDeliveryDefinitionArguments, RemoveDeliveryDefinitionResponse
} from "./command/salesChannel";
import {
    ChangeCustomerArguments,
    ChangeCustomerResponse,
    CreateCustomerArguments,
    CreateCustomerResponse,
    RemoveCustomerArguments,
    RemoveCustomerResponse
} from "./command/customer";
import {
    CreateUserArguments,
    CreateUserResponse,
    ChangeUserPasswordArguments,
    ChangeUserPasswordResponse,
    ChangeUserScopeArguments,
    ChangeUserScopeResponse,
    EnableUserArguments,
    EnableUserResponse,
    DisableUserArguments,
    DisableUserResponse,
    GetAuthTokenArguments,
    GetAuthTokenResponse,
    ResetUserPasswordResponse,
    ResetUserPasswordArguments
} from "./command/user";
import {
    CreateTagArguments,
    CreateTagResponse,
    RemoveTagArguments,
    RemoveTagResponse,
    RenameTagArguments,
    RenameTagResponse
} from "./command/tag";
import {
    CreateCouponArguments,
    CreateCouponResponse,
    ChangeCouponArguments,
    ChangeCouponResponse,
    CreateTokensArguments,
    CreateTokensResponse,
    RemoveTokenArguments,
    RemoveTokenResponse,
    UseTokenArguments,
    UseTokenResponse
} from "./command/token";
import {StartBatchOperationArguments, StartBatchOperationResponse} from "./command/batchOperation";
// import * as apiResponse from './Responses';


export class WebClient {


    private axios: AxiosInstance;

    // private requestQueue: PQueue;

    // private requestQueue: TaskQueue<Promise<AxiosResponse>>;
    // private requestQueue: TaskQueue<Promise>;

    private logger: LoggerInterface;

    private token: string;

    private readonly authUrl: string;

    private readonly adminApiUrl: string;

    private readonly graphApiUrl: string;


    // constructor({adminApiUrl = 'https://ticketengine.com/api/'}: WebClientOptions) {
    // constructor(token?: string, logger?: LoggerInterface, adminApiUrl?: string, graphApiUrl?: string) {
    constructor(options: WebClientOptions) {
        this.token = options.token || '';
        this.authUrl = options.authUrl || 'https://auth.ticketengine.io';
        this.adminApiUrl = options.adminApiUrl || 'https://admin-api.ticketengine.io';
        this.graphApiUrl = options.graphApiUrl || 'https://graph-api.ticketengine.io';
        this.logger = options.logger || new Logger();
        // this.requestQueue = new PQueue({concurrency: 1});
        // this.requestQueue = new TaskQueue(Promise, 1);
        this.axios = axios.create({
            // baseURL: adminApiUrl || 'https://ticketengine.com/api/',
            // headers: Object.assign({
            //     'User-Agent': getUserAgent(),
            // }, headers),
            // httpAgent: agentForScheme('http', agent),
            // httpsAgent: agentForScheme('https', agent),
            // transformRequest: [this.serializeApiCallOptions.bind(this)],
            // validateStatus: () => true, // all HTTP status codes should result in a resolved promise (as opposed to only 2xx)
            // maxRedirects: 0,
            // withCredentials: true,
            // timeout: 10000,
        });
        // this.axios.defaults.raxConfig = {
        //     instance: this.axios
        // };
        // attach(this.axios);

        if(options.oauthClientId && options.oauthClientSecret) this.setClient(options.oauthClientId, options.oauthClientSecret);
        if(options.oauthScope) this.setScope(options.oauthScope);
    }

    private setToken(token: string, expiresIn: number, refreshToken: string): void {
        if(localStorage) {
            localStorage.setItem("te-token", token);
            localStorage.setItem("te-token-expires-on", moment().add(expiresIn, 's').format('YYYY-MM-DD HH:mm'));
            localStorage.setItem("te-refresh-token", refreshToken);
        }
    }

    private setTokenFromResponse(response: AxiosResponse): void {
        // // @ts-ignore
        // if(response.access_token) this.setToken(response.access_token, response.expires_in, response.refresh_token);
        // @ts-ignore
        if(response.data.access_token) this.setToken(response.data.access_token, response.data.expires_in, response.data.refresh_token);
        // @ts-ignore
        if(response.data && response.data.accessToken) this.setToken(response.data.accessToken, response.data.expiresIn, response.data.refreshToken);
        // @ts-ignore
        if(response.data && response.data.data && response.data.data.accessToken) this.setToken(response.data.data.accessToken, response.data.data.expiresIn, response.data.data.refreshToken);
    }

    public setScope(scope: string): void {
        if(localStorage) {
            localStorage.setItem("te-scope", scope);
        }
    }

    public setClient(id: string, secret: string): void {
        if(localStorage) {
            localStorage.setItem("te-client-id", id);
            localStorage.setItem("te-client-secret", secret);
        }
    }

    public getToken(): string {
        if(localStorage) {
            return localStorage.getItem("te-token") || '';
        }
        return '';
    }

    public getRefreshToken(): string {
        if(localStorage) {
            return localStorage.getItem("te-refresh-token") || '';
        }
        return '';
    }

    public getScope(): string {
        if(localStorage) {
            return localStorage.getItem("te-scope") || '';
        }
        return '';
    }

    public getClientId(): string {
        if(localStorage) {
            return localStorage.getItem("te-client-id") || '';
        }
        return '';
    }

    public getClientSecret(): string {
        if(localStorage) {
            return localStorage.getItem("te-client-secret") || '';
        }
        return '';
    }

    private clearToken(): void {
        if(localStorage) {
            localStorage.removeItem("te-token");
            localStorage.removeItem("te-token-expires-on");
            localStorage.removeItem("te-refresh-token");
        }
    }

    public isTokenExpired(): boolean {
        let expiresOn = null;
        if(localStorage) {
            expiresOn = localStorage.getItem("te-token-expires-on");
        }
        if(expiresOn !== null) {
            return moment(expiresOn, 'YYYY-MM-DD HH:mm').isBefore(moment());
        }
        return true;
    }

    private async getAuthToken<GetAuthTokenResponse>(data: GetAuthTokenArguments, retryPolicy: Array<number> = [0, 0, 0]): Promise<GetAuthTokenResponse> {
        let url = this.authUrl + '/token';
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await this.request<GetAuthTokenResponse>(url, data, headers, retryPolicy);
        // // @ts-ignore
        // if(response.access_token) this.setToken(response.access_token, response.expires_in, response.refresh_token);
        // // @ts-ignore
        // if(response.data && response.data.accessToken) this.setToken(response.data.accessToken, response.data.expiresIn, response.data.refreshToken);
        // // @ts-ignore
        // if(response.data && response.data.data && response.data.data.accessToken) this.setToken(response.data.data.accessToken, response.data.data.expiresIn, response.data.data.refreshToken);
        this.setTokenFromResponse(response);
        this.setScope(data.scope);
        this.setClient(data.clientId, data.clientSecret);
        return response.data;
    }

    private async refreshAuthToken<GetAuthTokenResponse>(): Promise<GetAuthTokenResponse> {
        let url = this.authUrl + '/token';
        const headers = {
            'Content-Type': 'application/json'
        };
        const data = {
            grantType: 'refresh_token',
            clientId: this.getClientId(),
            clientSecret: this.getClientSecret(),
            scope: this.getScope(),
            refreshToken: this.getRefreshToken()
        };
        const response = await this.request<GetAuthTokenResponse>(url, data, headers, [0, 0, 0]);
        this.setTokenFromResponse(response);
        // // @ts-ignore
        // if(response.access_token) this.setToken(response.access_token, response.expires_in, response.refresh_token);
        // // @ts-ignore
        // if(response.data && response.data.accessToken) this.setToken(response.data.accessToken, response.data.expiresIn, response.data.refreshToken);
        // // @ts-ignore
        // if(response.data && response.data.data && response.data.data.accessToken) this.setToken(response.data.data.accessToken, response.data.data.expiresIn, response.data.data.refreshToken);
        return response.data;
    }


    private async sendCommand<T>(name: string, data: any, retryPolicy: Array<number> = [0, 0, 0]): Promise<T> {
        this.logger.debug('send command: ' + name);
        let url = this.adminApiUrl;
        const headers = {
            'Authorization': 'Bearer ' + this.getToken(),
            'X-Command': name,
            'Content-Type': 'application/json',
        };
        const body = Object.assign(
            {},
            data
        );

        const response = await this.request<T>(url, body, headers, retryPolicy);
        return response.data;
    }


    public async sendQuery<T>(query: string, retryPolicy: Array<number> = [0, 0, 0]): Promise<T> {
        this.logger.debug('send query :' + query);
        let url = this.graphApiUrl;
        const body = {query};
        const headers = {
            'Authorization': 'Bearer ' + this.getToken(),
            'Content-Type': 'application/json'
        };
        const response = await this.request<T>(url, body, headers, retryPolicy);
        return response.data;
    }


    private async sleep(ms: number): Promise<any> {
        return new Promise((resolve: any) => setTimeout(resolve, ms))
    }


    private async request<T>(url: string, body: any, headers: any = {}, retryPolicy: Array<number> = []): Promise<AxiosResponse<T>> {
        const self = this;
        this.logger.debug('make request');
        try {
            const response = await this.axios.request({
                method: 'post',
                url: url,
                data: body,
                headers: headers
            });
            this.logger.debug('response received');
            return response;
        } catch (error) {
            const responseStatus = (error && error.response && error.response.status) ? error.response.status : null;
            this.logger.debug('request failed with status: ' + responseStatus);
            // this.logger.debug(error.response.body);


            const sleepTime = retryPolicy.shift();



            // abort retry, retries attempts exceeded
            // if (remainingTries === 1) throw new Error('Retry attempts exceeded');
            // if (remainingTries === 1) throw error;
            if(sleepTime === undefined) throw error;

            // abort retry, unauthorized
            // if(responseStatus === 401 || responseStatus === 403) {
            if(responseStatus === 401) {
                this.clearToken();
                // throw new Error('Unauthorized');
                throw error;
            }

            // abort retry, resource doesn't exist
            // if(responseStatus === 404) throw new Error('Resource doesn\'t exist');
            // if(responseStatus === 404) throw error;

            // domain in invalid state, do not retry
            if(responseStatus === 409) throw error;

            // retry
            await self.sleep(sleepTime); // wait x milliseconds
            return await self.request<T>(url, body, headers, retryPolicy);
        }

    }


    public async query(query: string): Promise<QueryResponse<Search>> {
        return this.sendQuery<QueryResponse<Search>>(query)
    }


    // public readonly search = {
    //     search: async (query: string): Promise<QueryResponse<Search>> =>
    //         this.sendQuery<QueryResponse<Search>>(query),
    // };

    public readonly access = {
        createEventManager: async (data: CreateEventManagerArguments, retryPolicy?: Array<number>): Promise<CreateEventManagerResponse> =>
            this.sendCommand<CreateEventManagerResponse>('CreateEventManager', data, retryPolicy),
        createEventManagerAndPlanEvent: async (data: CreateEventManagerAndPlanEventArguments, retryPolicy?: Array<number>): Promise<CreateEventManagerAndPlanEventResponse> =>
            this.sendCommand<CreateEventManagerAndPlanEventResponse>('CreateEventManagerAndPlanEvent', data, retryPolicy),

        // event
        planEvent: async (data: PlanEventArguments, retryPolicy?: Array<number>): Promise<PlanEventResponse> =>
            this.sendCommand<PlanEventResponse>('PlanEvent', data, retryPolicy),
        renameEvent: async (data: RenameEventArguments, retryPolicy?: Array<number>): Promise<RenameEventResponse> =>
            this.sendCommand<RenameEventResponse>('RenameEvent', data, retryPolicy),
        rescheduleEvent: async (data: RescheduleEventArguments, retryPolicy?: Array<number>): Promise<RescheduleEventResponse> =>
            this.sendCommand<RescheduleEventResponse>('RescheduleEvent', data, retryPolicy),
        relocateEvent: async (data: RelocateEventArguments, retryPolicy?: Array<number>): Promise<RelocateEventResponse> =>
            this.sendCommand<RelocateEventResponse>('RelocateEvent', data, retryPolicy),
        cancelEvent: async (data: CancelEventArguments, retryPolicy?: Array<number>): Promise<CancelEventResponse> =>
            this.sendCommand<CancelEventResponse>('CancelEvent', data, retryPolicy),
        publishEvent: async (data: PublishEventArguments, retryPolicy?: Array<number>): Promise<PublishEventResponse> =>
            this.sendCommand<PublishEventResponse>('PublishEvent', data, retryPolicy),
        draftEvent: async (data: DraftEventArguments, retryPolicy?: Array<number>): Promise<DraftEventResponse> =>
            this.sendCommand<DraftEventResponse>('DraftEvent', data, retryPolicy),
        assignEventTag: async (data: AssignEventTagArguments, retryPolicy?: Array<number>): Promise<AssignEventTagResponse> =>
            this.sendCommand<AssignEventTagResponse>('AssignEventTag', data, retryPolicy),
        revokeEventTag: async (data: RevokeEventTagArguments, retryPolicy?: Array<number>): Promise<RevokeEventTagResponse> =>
            this.sendCommand<RevokeEventTagResponse>('RevokeEventTag', data, retryPolicy),
        changeEventTags: async (data: ChangeEventTagsArguments, retryPolicy?: Array<number>): Promise<ChangeEventTagsResponse> =>
            this.sendCommand<ChangeEventTagsResponse>('ChangeEventTags', data, retryPolicy),
        addEventExternalId: async (data: AddEventExternalIdArguments, retryPolicy?: Array<number>): Promise<AddEventExternalIdResponse> =>
            this.sendCommand<AddEventExternalIdResponse>('AddEventExternalId', data, retryPolicy),
        removeEventExternalId: async (data: RemoveEventExternalIdArguments, retryPolicy?: Array<number>): Promise<RemoveEventExternalIdResponse> =>
            this.sendCommand<RemoveEventExternalIdResponse>('RemoveEventExternalId', data, retryPolicy),
        changeEventExternalIds: async (data: ChangeEventExternalIdsArguments, retryPolicy?: Array<number>): Promise<ChangeEventExternalIdsResponse> =>
            this.sendCommand<ChangeEventExternalIdsResponse>('ChangeEventExternalIds', data, retryPolicy),
        applyEventTemplate: async (data: ApplyEventTemplateArguments, retryPolicy?: Array<number>): Promise<ApplyEventTemplateResponse> =>
            this.sendCommand<ApplyEventTemplateResponse>('ApplyEventTemplate', data, retryPolicy),
        detachEventTemplate: async (data: DetachEventTemplateArguments, retryPolicy?: Array<number>): Promise<DetachEventTemplateResponse> =>
            this.sendCommand<DetachEventTemplateResponse>('DetachEventTemplate', data, retryPolicy),

        // capacity
        addCapacity: async (data: AddCapacityArguments, retryPolicy?: Array<number>): Promise<AddCapacityResponse> =>
            this.sendCommand<AddCapacityResponse>('AddCapacity', data, retryPolicy),
        changeCapacity: async (data: ChangeCapacityArguments, retryPolicy?: Array<number>): Promise<ChangeCapacityResponse> =>
            this.sendCommand<ChangeCapacityResponse>('ChangeCapacity', data, retryPolicy),

        // access definition
        addAccessDefinition: async (data: AddAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<AddAccessDefinitionResponse> =>
            this.sendCommand<AddAccessDefinitionResponse>('AddAccessDefinition', data, retryPolicy),
        removeAccessDefinition: async (data: RemoveAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<RemoveAccessDefinitionResponse> =>
            this.sendCommand<RemoveAccessDefinitionResponse>('RemoveAccessDefinition', data, retryPolicy),
        renameAccessDefinition: async (data: RenameAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<RenameAccessDefinitionResponse> =>
            this.sendCommand<RenameAccessDefinitionResponse>('RenameAccessDefinition', data, retryPolicy),
        rescheduleAccessDefinition: async (data: RescheduleAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<RescheduleAccessDefinitionResponse> =>
            this.sendCommand<RescheduleAccessDefinitionResponse>('RescheduleAccessDefinition', data, retryPolicy),
        changeAccessDefinitionConditions: async (data: ChangeAccessDefinitionConditionsArguments, retryPolicy?: Array<number>): Promise<ChangeAccessDefinitionConditionsResponse> =>
            this.sendCommand<ChangeAccessDefinitionConditionsResponse>('ChangeAccessDefinitionConditions', data, retryPolicy),
        addAccessDefinitionCapacityLocation: async (data: AddAccessDefinitionCapacityLocationArguments, retryPolicy?: Array<number>): Promise<AddAccessDefinitionCapacityLocationResponse> =>
            this.sendCommand<AddAccessDefinitionCapacityLocationResponse>('AddAccessDefinitionCapacityLocation', data, retryPolicy),
        removeAccessDefinitionCapacityLocation: async (data: RemoveAccessDefinitionCapacityLocationArguments, retryPolicy?: Array<number>): Promise<RemoveAccessDefinitionCapacityLocationResponse> =>
            this.sendCommand<RemoveAccessDefinitionCapacityLocationResponse>('RemoveAccessDefinitionCapacityLocation', data, retryPolicy),
        changeAccessDefinitionCapacityLocations: async (data: ChangeAccessDefinitionCapacityLocationsArguments, retryPolicy?: Array<number>): Promise<ChangeAccessDefinitionCapacityLocationsResponse> =>
            this.sendCommand<ChangeAccessDefinitionCapacityLocationsResponse>('ChangeAccessDefinitionCapacityLocations', data, retryPolicy),
        changeAccessDefinitionCapacityLocationAllocation: async (data: ChangeAccessDefinitionCapacityLocationAllocationArguments, retryPolicy?: Array<number>): Promise<ChangeAccessDefinitionCapacityLocationAllocationResponse> =>
            this.sendCommand<ChangeAccessDefinitionCapacityLocationAllocationResponse>('ChangeAccessDefinitionCapacityLocationAllocation', data, retryPolicy),
        changeAccessDefinitionUseLimit: async (data: ChangeAccessDefinitionUseLimitArguments, retryPolicy?: Array<number>): Promise<ChangeAccessDefinitionUseLimitResponse> =>
            this.sendCommand<ChangeAccessDefinitionUseLimitResponse>('ChangeAccessDefinitionUseLimit', data, retryPolicy),
        assignAccessDefinitionTag: async (data: AssignAccessDefinitionTagArguments, retryPolicy?: Array<number>): Promise<AssignAccessDefinitionTagResponse> =>
            this.sendCommand<AssignAccessDefinitionTagResponse>('AssignAccessDefinitionTag', data, retryPolicy),
        revokeAccessDefinitionTag: async (data: RevokeAccessDefinitionTagArguments, retryPolicy?: Array<number>): Promise<RevokeAccessDefinitionTagResponse> =>
            this.sendCommand<RevokeAccessDefinitionTagResponse>('RevokeAccessDefinitionTag', data, retryPolicy),
        changeAccessDefinitionTags: async (data: ChangeAccessDefinitionTagsArguments, retryPolicy?: Array<number>): Promise<ChangeAccessDefinitionTagsResponse> =>
            this.sendCommand<ChangeAccessDefinitionTagsResponse>('ChangeAccessDefinitionTags', data, retryPolicy),
        markAccessDefinitionAsTemplate: async (data: MarkAccessDefinitionAsTemplateArguments, retryPolicy?: Array<number>): Promise<MarkAccessDefinitionAsTemplateResponse> =>
            this.sendCommand<MarkAccessDefinitionAsTemplateResponse>('MarkAccessDefinitionAsTemplate', data, retryPolicy),

        // access
        reserveAccess: async (data: ReserveAccessArguments, retryPolicy?: Array<number>): Promise<ReserveAccessResponse> =>
            this.sendCommand<ReserveAccessResponse>('ReserveAccess', data, retryPolicy),
        grantAccess: async (data: GrantAccessArguments, retryPolicy?: Array<number>): Promise<GrantAccessResponse> =>
            this.sendCommand<GrantAccessResponse>('GrantAccess', data, retryPolicy),
        returnAccess: async (data: ReturnAccessArguments, retryPolicy?: Array<number>): Promise<ReturnAccessResponse> =>
            this.sendCommand<ReturnAccessResponse>('ReturnAccess', data, retryPolicy),
        useAccess: async (data: UseAccessArguments, retryPolicy: Array<number> = []): Promise<UseAccessResponse> =>
            this.sendCommand<UseAccessResponse>('UseAccess', data, retryPolicy),

        // event template
        createEventTemplate: async (data: CreateEventTemplateArguments, retryPolicy?: Array<number>): Promise<CreateEventTemplateResponse> =>
            this.sendCommand<CreateEventTemplateResponse>('CreateEventTemplate', data, retryPolicy),
        renameEventTemplate: async (data: RenameEventTemplateArguments, retryPolicy?: Array<number>): Promise<RenameEventTemplateResponse> =>
            this.sendCommand<RenameEventTemplateResponse>('RenameEventTemplate', data, retryPolicy),
        addEventTemplateCapacity: async (data: AddEventTemplateCapacityArguments, retryPolicy?: Array<number>): Promise<AddEventTemplateCapacityResponse> =>
            this.sendCommand<AddEventTemplateCapacityResponse>('AddEventTemplateCapacity', data, retryPolicy),
        changeEventTemplateCapacity: async (data: ChangeEventTemplateCapacityArguments, retryPolicy?: Array<number>): Promise<ChangeEventTemplateCapacityResponse> =>
            this.sendCommand<ChangeEventTemplateCapacityResponse>('ChangeEventTemplateCapacity', data, retryPolicy),
        addEventTemplateAccessDefinition: async (data: AddEventTemplateAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<AddEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<AddEventTemplateAccessDefinitionResponse>('AddEventTemplateAccessDefinition', data, retryPolicy),
        removeEventTemplateAccessDefinition: async (data: RemoveEventTemplateAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<RemoveEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<RemoveEventTemplateAccessDefinitionResponse>('RemoveEventTemplateAccessDefinition', data, retryPolicy),
        rescheduleEventTemplateAccessDefinition: async (data: RescheduleEventTemplateAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<RescheduleEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<RescheduleEventTemplateAccessDefinitionResponse>('RescheduleEventTemplateAccessDefinition', data, retryPolicy),
        renameEventTemplateAccessDefinition: async (data: RenameEventTemplateAccessDefinitionArguments, retryPolicy?: Array<number>): Promise<RenameEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<RenameEventTemplateAccessDefinitionResponse>('RenameEventTemplateAccessDefinition', data, retryPolicy),
        changeEventTemplateAccessDefinitionCapacityLocationAllocation: async (data: ChangeEventTemplateAccessDefinitionCapacityLocationAllocationArguments, retryPolicy?: Array<number>): Promise<ChangeEventTemplateAccessDefinitionCapacityLocationAllocationResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionCapacityLocationAllocationResponse>('ChangeEventTemplateAccessDefinitionCapacityLocationAllocation', data, retryPolicy),
        changeEventTemplateAccessDefinitionConditions: async (data: ChangeEventTemplateAccessDefinitionConditionsArguments, retryPolicy?: Array<number>): Promise<ChangeEventTemplateAccessDefinitionConditionsResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionConditionsResponse>('ChangeEventTemplateAccessDefinitionConditions', data, retryPolicy),
        changeEventTemplateAccessDefinitionTags: async (data: ChangeEventTemplateAccessDefinitionTagsArguments, retryPolicy?: Array<number>): Promise<ChangeEventTemplateAccessDefinitionTagsResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionTagsResponse>('ChangeEventTemplateAccessDefinitionTags', data, retryPolicy),
        changeEventTemplateAccessDefinitionUseLimit: async (data: ChangeEventTemplateAccessDefinitionUseLimitArguments, retryPolicy?: Array<number>): Promise<ChangeEventTemplateAccessDefinitionUseLimitResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionUseLimitResponse>('ChangeEventTemplateAccessDefinitionUseLimit', data, retryPolicy),
        assignEventTemplateAccessDefinitionLocation: async (data: AssignEventTemplateAccessDefinitionLocationArguments, retryPolicy?: Array<number>): Promise<AssignEventTemplateAccessDefinitionLocationResponse> =>
            this.sendCommand<AssignEventTemplateAccessDefinitionLocationResponse>('AssignEventTemplateAccessDefinitionLocation', data, retryPolicy),

        // getEvent: async (query: string): Promise<QueryResponse<Event>> =>
        //     this.sendQuery<QueryResponse<Event>>(query),
        // getEvents: async (query: string): Promise<QueryResponse<Array<Event>>> =>
        //     this.sendQuery<QueryResponse<Array<Event>>>(query),
        // getAccess: async (query: string): Promise<QueryResponse<Access>> =>
        //     this.sendQuery<QueryResponse<Access>>(query),
        // getAcceses: async (query: string): Promise<QueryResponse<Array<Access>>> =>
        //     this.sendQuery<QueryResponse<Array<Access>>>(query),
        // getAccessDefinition: async (query: string): Promise<QueryResponse<AccessDefinition>> =>
        //     this.sendQuery<QueryResponse<AccessDefinition>>(query),
        // getAccessDefinitions: async (query: string): Promise<QueryResponse<AccessDefinition>> =>
        //     this.sendQuery<QueryResponse<AccessDefinition>>(query),
    };

    public readonly order = {
        createOrder: async (data: CreateOrderArguments, retryPolicy?: Array<number>): Promise<CreateOrderResponse> =>
            this.sendCommand<CreateOrderResponse>('CreateOrder', data, retryPolicy),
        addAccessToCart: async (data: AddAccessToCartArguments, retryPolicy?: Array<number>): Promise<AddAccessToCartResponse> =>
            this.sendCommand<AddAccessToCartResponse>('AddAccessToCart', data, retryPolicy),
        addProductToCart: async (data: AddProductToCartArguments, retryPolicy?: Array<number>): Promise<AddProductToCartResponse> =>
            this.sendCommand<AddProductToCartResponse>('AddProductToCart', data, retryPolicy),
        reserveAccessInCart: async (data: ReserveAccessInCartArguments, retryPolicy?: Array<number>): Promise<ReserveAccessInCartResponse> =>
            this.sendCommand<ReserveAccessInCartResponse>('ReserveAccessInCart', data, retryPolicy),
        reserveProductInCart: async (data: ReserveProductInCartArguments, retryPolicy?: Array<number>): Promise<ReserveProductInCartResponse> =>
            this.sendCommand<ReserveProductInCartResponse>('ReserveProductInCart', data, retryPolicy),
        completeItemInCart: async (data: CompleteItemInCartArguments, retryPolicy?: Array<number>): Promise<CompleteItemInCartResponse> =>
            this.sendCommand<CompleteItemInCartResponse>('CompleteItemInCart', data, retryPolicy),
        removeItemFromCart: async (data: RemoveItemFromCartArguments, retryPolicy?: Array<number>): Promise<RemoveItemFromCartResponse> =>
            this.sendCommand<RemoveItemFromCartResponse>('RemoveItemFromCart', data, retryPolicy),
        returnItemInCart: async (data: ReturnItemInCartArguments, retryPolicy?: Array<number>): Promise<ReturnItemInCartResponse> =>
            this.sendCommand<ReturnItemInCartResponse>('ReturnItemInCart', data, retryPolicy),
        cancelOrder: async (data: CancelOrderArguments, retryPolicy?: Array<number>): Promise<CancelOrderResponse> =>
            this.sendCommand<CancelOrderResponse>('CancelOrder', data, retryPolicy),
        checkoutOrder: async (data: CheckoutOrderArguments, retryPolicy?: Array<number>): Promise<CheckoutOrderResponse> =>
            this.sendCommand<CheckoutOrderResponse>('CheckoutOrder', data, retryPolicy),
        completeOrder: async (data: CompleteOrderArguments, retryPolicy?: Array<number>): Promise<CompleteOrderResponse> =>
            this.sendCommand<CompleteOrderResponse>('CompleteOrder', data, retryPolicy),
        reserveOrder: async (data: ReserveOrderArguments, retryPolicy?: Array<number>): Promise<ReserveOrderResponse> =>
            this.sendCommand<ReserveOrderResponse>('ReserveOrder', data, retryPolicy),
        addOrderToken: async (data: AddOrderTokenArguments, retryPolicy?: Array<number>): Promise<AddOrderTokenResponse> =>
            this.sendCommand<AddOrderTokenResponse>('AddOrderToken', data, retryPolicy),
        assignToCustomer: async (data: AssignOrderToCustomerArguments, retryPolicy?: Array<number>): Promise<AssignOrderToCustomerResponse> =>
            this.sendCommand<AssignOrderToCustomerResponse>('AssignOrderToCustomer', data, retryPolicy),
        unassignFromCustomer: async (data: UnassignOrderFromCustomerArguments, retryPolicy?: Array<number>): Promise<UnassignOrderFromCustomerResponse> =>
            this.sendCommand<UnassignOrderFromCustomerResponse>('UnassignOrderFromCustomer', data, retryPolicy),
        cartBatchOperation: async (data: CartBatchOperationArguments, retryPolicy?: Array<number>): Promise<CartBatchOperationResponse> =>
            this.sendCommand<CartBatchOperationResponse>('CartBatchOperation', data, retryPolicy),
        // getOrder: async (query: string): Promise<QueryResponse<Order>> =>
        //     this.sendQuery<QueryResponse<Order>>(query),
        // getOrders: async (query: string): Promise<QueryResponse<Array<Order>>> =>
        //     this.sendQuery<QueryResponse<Array<Order>>>(query),
        addTimeoutSetting: async (data: AddTimeoutSettingArguments, retryPolicy?: Array<number>): Promise<AddTimeoutSettingResponse> =>
            this.sendCommand<AddTimeoutSettingResponse>('AddTimeoutSetting', data, retryPolicy),
        changeTimeoutSetting: async (data: ChangeTimeoutSettingArguments, retryPolicy?: Array<number>): Promise<ChangeTimeoutSettingResponse> =>
            this.sendCommand<ChangeTimeoutSettingResponse>('ChangeTimeoutSetting', data, retryPolicy),
        removeTimeoutSetting: async (data: RemoveTimeoutSettingArguments, retryPolicy?: Array<number>): Promise<RemoveTimeoutSettingResponse> =>
            this.sendCommand<RemoveTimeoutSettingResponse>('RemoveTimeoutSetting', data, retryPolicy),
    };

    public readonly payment = {
        addAdyenClientSettings: async (data: AddAdyenClientSettingsArguments, retryPolicy?: Array<number>): Promise<AddAdyenClientSettingsResponse> =>
            this.sendCommand<AddAdyenClientSettingsResponse>('AddAdyenClientSettings', data, retryPolicy),
        editAdyenClientSettings: async (data: EditAdyenClientSettingsArguments, retryPolicy?: Array<number>): Promise<EditAdyenClientSettingsResponse> =>
            this.sendCommand<EditAdyenClientSettingsResponse>('EditAdyenClientSettings', data, retryPolicy),
        addMollieClientSettings: async (data: AddMollieClientSettingsArguments, retryPolicy?: Array<number>): Promise<AddMollieClientSettingsResponse> =>
            this.sendCommand<AddMollieClientSettingsResponse>('AddMollieClientSettings', data, retryPolicy),
        editMollieClientSettings: async (data: EditMollieClientSettingsArguments, retryPolicy?: Array<number>): Promise<EditMollieClientSettingsResponse> =>
            this.sendCommand<EditMollieClientSettingsResponse>('EditMollieClientSettings', data, retryPolicy),
        createCashPayment: async (data: CreateCashPaymentArguments, retryPolicy?: Array<number>): Promise<CreateCashPaymentResponse> =>
            this.sendCommand<CreateCashPaymentResponse>('CreateCashPayment', data, retryPolicy),
        createPinPayment: async (data: CreatePinPaymentArguments, retryPolicy?: Array<number>): Promise<CreatePinPaymentResponse> =>
            this.sendCommand<CreatePinPaymentResponse>('CreatePinPayment', data, retryPolicy),
        createAdyenPaymentSession: async (data: CreateAdyenPaymentSessionArguments, retryPolicy?: Array<number>): Promise<CreateAdyenPaymentSessionResponse> =>
            this.sendCommand<CreateAdyenPaymentSessionResponse>('CreateAdyenPaymentSession', data, retryPolicy),
        createMolliePayment: async (data: CreateMolliePaymentArguments, retryPolicy?: Array<number>): Promise<CreateMolliePaymentResponse> =>
            this.sendCommand<CreateMolliePaymentResponse>('CreateMolliePayment', data, retryPolicy),
    };

    public readonly customer = {
        createCustomer: async (data: CreateCustomerArguments, retryPolicy?: Array<number>): Promise<CreateCustomerResponse> =>
            this.sendCommand<CreateCustomerResponse>('CreateCustomer', data, retryPolicy),
        changeCustomer: async (data: ChangeCustomerArguments, retryPolicy?: Array<number>): Promise<ChangeCustomerResponse> =>
            this.sendCommand<ChangeCustomerResponse>('ChangeCustomer', data, retryPolicy),
        removeCustomer: async (data: RemoveCustomerArguments, retryPolicy?: Array<number>): Promise<RemoveCustomerResponse> =>
            this.sendCommand<RemoveCustomerResponse>('RemoveCustomer', data, retryPolicy),
    };

    public readonly email = {
        addMailgunClientSettings: async (data: AddMailgunClientSettingsArguments, retryPolicy?: Array<number>): Promise<AddMailgunClientSettingsResponse> =>
            this.sendCommand<AddMailgunClientSettingsResponse>('AddMailgunClientSettings', data, retryPolicy),
        editMailgunClientSettings: async (data: EditMailgunClientSettingsArguments, retryPolicy?: Array<number>): Promise<EditMailgunClientSettingsResponse> =>
            this.sendCommand<EditMailgunClientSettingsResponse>('EditMailgunClientSettings', data, retryPolicy),
        sendEmail: async (data: SendEmailArguments, retryPolicy?: Array<number>): Promise<SendEmailResponse> =>
            this.sendCommand<SendEmailResponse>('SendEmail', data, retryPolicy),
        addEmailTemplate: async (data: AddEmailTemplateArguments, retryPolicy?: Array<number>): Promise<AddEmailTemplateResponse> =>
            this.sendCommand<AddEmailTemplateResponse>('AddEmailTemplate', data, retryPolicy),
        editEmailTemplate: async (data: EditEmailTemplateArguments, retryPolicy?: Array<number>): Promise<EditEmailTemplateResponse> =>
            this.sendCommand<EditEmailTemplateResponse>('EditEmailTemplate', data, retryPolicy),
        removeEmailTemplate: async (data: RemoveEmailTemplateArguments, retryPolicy?: Array<number>): Promise<RemoveEmailTemplateResponse> =>
            this.sendCommand<RemoveEmailTemplateResponse>('RemoveEmailTemplate', data, retryPolicy),
        sendEmailTemplate: async (data: SendEmailTemplateArguments, retryPolicy?: Array<number>): Promise<SendEmailTemplateResponse> =>
            this.sendCommand<SendEmailTemplateResponse>('SendEmailTemplate', data, retryPolicy),
    };

    public readonly salesChannel = {
        createSalesChannel: async (data: CreateSalesChannelArguments, retryPolicy?: Array<number>): Promise<CreateSalesChannelResponse> =>
            this.sendCommand<CreateSalesChannelResponse>('CreateSalesChannel', data, retryPolicy),
        renameSalesChannel: async (data: RenameSalesChannelArguments, retryPolicy?: Array<number>): Promise<RenameSalesChannelResponse> =>
            this.sendCommand<RenameSalesChannelResponse>('RenameSalesChannel', data, retryPolicy),
        addRegister: async (data: AddRegisterArguments, retryPolicy?: Array<number>): Promise<AddRegisterResponse> =>
            this.sendCommand<AddRegisterResponse>('AddRegister', data, retryPolicy),
        renameRegister: async (data: RenameRegisterArguments, retryPolicy?: Array<number>): Promise<RenameRegisterResponse> =>
            this.sendCommand<RenameRegisterResponse>('RenameRegister', data, retryPolicy),
        removeRegister: async (data: RemoveRegisterArguments, retryPolicy?: Array<number>): Promise<RemoveRegisterResponse> =>
            this.sendCommand<RemoveRegisterResponse>('RemoveRegister', data, retryPolicy),
        addDeliveryDefinition: async (data: AddDeliveryDefinitionArguments, retryPolicy?: Array<number>): Promise<AddDeliveryDefinitionResponse> =>
            this.sendCommand<AddDeliveryDefinitionResponse>('AddDeliveryDefinition', data, retryPolicy),
        editDeliveryDefinition: async (data: EditDeliveryDefinitionArguments, retryPolicy?: Array<number>): Promise<EditDeliveryDefinitionResponse> =>
            this.sendCommand<EditDeliveryDefinitionResponse>('EditDeliveryDefinition', data, retryPolicy),
        removeDeliveryDefinition: async (data: RemoveDeliveryDefinitionArguments, retryPolicy?: Array<number>): Promise<RemoveDeliveryDefinitionResponse> =>
            this.sendCommand<RemoveDeliveryDefinitionResponse>('RemoveDeliveryDefinition', data, retryPolicy),
        // changeDeliveryDefinitionCondition: async (data: ChangeDeliveryDefinitionConditionArguments, retryPolicy?: Array<number>): Promise<ChangeDeliveryDefinitionConditionResponse> =>
        //     this.sendCommand<ChangeDeliveryDefinitionConditionResponse>('ChangeDeliveryDefinitionCondition', data),
        // changeDeliveryDefinitionContent: async (data: ChangeDeliveryDefinitionContentArguments, retryPolicy?: Array<number>): Promise<ChangeDeliveryDefinitionContentResponse> =>
        //     this.sendCommand<ChangeDeliveryDefinitionContentResponse>('ChangeDeliveryDefinitionContent', data),
        // renameDeliveryDefinition: async (data: RenameDeliveryDefinitionArguments, retryPolicy?: Array<number>): Promise<RenameDeliveryDefinitionResponse> =>
        //     this.sendCommand<RenameDeliveryDefinitionResponse>('RenameDeliveryDefinition', data),
        // createEmailDelivery: async (data: CreateEmailDeliveryArguments, retryPolicy?: Array<number>): Promise<CreateEmailDeliveryResponse> =>
        //     this.sendCommand<CreateEmailDeliveryResponse>('CreateEmailDelivery', data),
    };

    public readonly user = {
        createUser: async (data: CreateUserArguments, retryPolicy?: Array<number>): Promise<CreateUserResponse> =>
            this.sendCommand<CreateUserResponse>('CreateUser', data, retryPolicy),
        changeUserScope: async (data: ChangeUserScopeArguments, retryPolicy?: Array<number>): Promise<ChangeUserScopeResponse> =>
            this.sendCommand<ChangeUserScopeResponse>('ChangeUserScope', data, retryPolicy),
        changeUserPassword: async (data: ChangeUserPasswordArguments, retryPolicy?: Array<number>): Promise<ChangeUserPasswordResponse> =>
            this.sendCommand<ChangeUserPasswordResponse>('ChangeUserPassword', data, retryPolicy),
        resetUserPassword: async (data: ResetUserPasswordArguments, retryPolicy?: Array<number>): Promise<ResetUserPasswordResponse> =>
            this.sendCommand<ResetUserPasswordResponse>('ResetUserPassword', data, retryPolicy),
        enableUser: async (data: EnableUserArguments, retryPolicy?: Array<number>): Promise<EnableUserResponse> =>
            this.sendCommand<EnableUserResponse>('EnableUser', data, retryPolicy),
        disableUser: async (data: DisableUserArguments, retryPolicy?: Array<number>): Promise<DisableUserResponse> =>
            this.sendCommand<DisableUserResponse>('DisableUser', data, retryPolicy),
        getAuthToken: async (data: GetAuthTokenArguments, retryPolicy?: Array<number>): Promise<GetAuthTokenResponse> =>
            this.getAuthToken<GetAuthTokenResponse>(data, retryPolicy),
        refreshAuthToken: async (): Promise<GetAuthTokenResponse> =>
            this.refreshAuthToken<GetAuthTokenResponse>(),
    };

    public readonly tag = {
        createTag: async (data: CreateTagArguments, retryPolicy?: Array<number>): Promise<CreateTagResponse> =>
            this.sendCommand<CreateTagResponse>('CreateTag', data, retryPolicy),
        renameTag: async (data: RenameTagArguments, retryPolicy?: Array<number>): Promise<RenameTagResponse> =>
            this.sendCommand<RenameTagResponse>('RenameTag', data, retryPolicy),
        removeTag: async (data: RemoveTagArguments, retryPolicy?: Array<number>): Promise<RemoveTagResponse> =>
            this.sendCommand<RemoveTagResponse>('RemoveTag', data, retryPolicy),
    };

    public readonly tokens = {
        createCoupon: async (data: CreateCouponArguments, retryPolicy?: Array<number>): Promise<CreateCouponResponse> =>
            this.sendCommand<CreateCouponResponse>('CreateCoupon', data, retryPolicy),
        changeCoupon: async (data: ChangeCouponArguments, retryPolicy?: Array<number>): Promise<ChangeCouponResponse> =>
            this.sendCommand<ChangeCouponResponse>('ChangeCoupon', data, retryPolicy),
        createTokens: async (data: CreateTokensArguments, retryPolicy?: Array<number>): Promise<CreateTokensResponse> =>
            this.sendCommand<CreateTokensResponse>('CreateTokens', data, retryPolicy),
        removeToken: async (data: RemoveTokenArguments, retryPolicy?: Array<number>): Promise<RemoveTokenResponse> =>
            this.sendCommand<RemoveTokenResponse>('RemoveToken', data, retryPolicy),
        useToken: async (data: UseTokenArguments, retryPolicy?: Array<number>): Promise<UseTokenResponse> =>
            this.sendCommand<UseTokenResponse>('UseToken', data, retryPolicy),
    };

    public readonly batchOperation = {
        startBatchOperation: async (data: StartBatchOperationArguments, retryPolicy?: Array<number>): Promise<StartBatchOperationResponse> =>
            this.sendCommand<StartBatchOperationResponse>('StartBatchOperation', data, retryPolicy),
    };
}


export interface WebClientOptions {
    authUrl?: string;
    adminApiUrl?: string;
    graphApiUrl?: string;
    oauthClientId?: string;
    oauthClientSecret?: string;
    oauthScope?: string;
    token?: string;
    logger?: any;
}

