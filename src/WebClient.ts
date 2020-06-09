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
    RemoveTimeoutSettingArguments, RemoveTimeoutSettingResponse
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
    }

    private setToken(token: string, expiresIn: number, refreshToken: string): void {
        if(localStorage) {
            localStorage.setItem("te-token", token);
            localStorage.setItem("te-token-expires-on", moment().add(expiresIn, 's').format('YYYY-MM-DD HH:mm'));
            localStorage.setItem("te-refresh-token", refreshToken);
        }
    }

    private getToken(): string {
        if(localStorage) {
            return localStorage.getItem("te-token") || '';
        }
        return '';
    }

    private getRefreshToken(): string {
        if(localStorage) {
            return localStorage.getItem("te-refresh-token") || '';
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

    private async getAuthToken<GetAuthTokenResponse>(data: GetAuthTokenArguments): Promise<GetAuthTokenResponse> {
        let url = this.authUrl + '/token';
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await this.request<GetAuthTokenResponse>(url, data, headers, 3);
        // @ts-ignore
        if(response.access_token) this.setToken(response.access_token, response.expires_in, response.refresh_token);
        // @ts-ignore
        if(response.data && response.data.accessToken) this.setToken(response.data.accessToken, response.data.expiresIn, response.data.refreshToken);
        // @ts-ignore
        if(response.data && response.data.data && response.data.data.accessToken) this.setToken(response.data.data.accessToken, response.data.data.expiresIn, response.data.data.refreshToken);
        return response.data;
    }


    private async sendCommand<T>(command: string, commandData: any, tries: number = 5): Promise<T> {
        this.logger.debug('send command: ' + command);
        let url = this.adminApiUrl;
        const headers = {
            // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0aWNrZXRfZW5naW5lX2JhY2tfb2ZmaWNlIiwianRpIjoiOGYyNDEzYTZiYTAwMWM0ZTJmMzRlNjg1YzFiZWE5NmQ0ZWJmYzYyNTJhNTQ4YmY1YzZiMzFlODI2MTBlMDkxMzUwMDYzYzJhODNlYzkwOTkiLCJpYXQiOjE1NzYyNDk4NTUsIm5iZiI6MTU3NjI0OTg1NSwiZXhwIjoxNTc2MjUzNDU0LCJzdWIiOiJhMzVkOWNhYS0xY2Y1LTExZWEtOGE0Yi0wMjQyYWMxNTAwMDgiLCJzY29wZXMiOlsiZXZlbnRfbWFuYWdlcjp3cml0ZSIsImV2ZW50OndyaXRlIiwiY3VzdG9tZXI6d3JpdGUiLCJ1c2VyOndyaXRlIiwib3JkZXI6d3JpdGUiLCJ0YWc6d3JpdGUiLCJzYWxlc19jaGFuZWw6d3JpdGUiLCJhY2Nlc3NfZGVmaW5pdGlvbjp3cml0ZSIsImFjY2Vzczp3cml0ZSIsImNhcGFjaXR5OndyaXRlIiwicGF5bWVudDp3cml0ZSIsImVtYWlsOndyaXRlIiwiYWRtaW4uZXZlbnQ6d3JpdGUiLCJhZG1pbi5vcmRlcjp3cml0ZSIsImFkbWluLnBheW1lbnQ6d3JpdGUiLCJhZG1pbi5lbWFpbDp3cml0ZSJdfQ.tI8UcNs5e3iFMLee257gm1DCu8BviQMuzypAofQOsjFvN_29PZGKbozCcLgoUs4PCBbM2ZGOkfs2YG4XtYPiiQWlzj0256iHvddO1dSWlwg5Trxhtb4NjFSFc59deczddOuMQkKDcrWUIYY7kHWcWBe5wgT-Wswf4BHWmFDuU1qYRxlSOdsKD270Hy02L-vEDbBjK0MSW9p1ITb67X0K68ii0Os-71KzoQkbM_cGmGj_fn-RaDai0Z4N6dmfYl4p40tkz1IASbFcmLUITaD4Qp75R8w84oz1J5JaDtZ9sef7XyyLBPWAa5ZDxtlQXlx4Gf0Z_zOKepIrObqzkYOpwA',
            'Authorization': 'Bearer ' + this.getToken(),
            'X-Command': command,
            'Content-Type': 'application/json',
        };
        const body = Object.assign(
            {},
            commandData
        );

        const response = await this.request<T>(url, body, headers, tries);
        return response.data;
    }


    private async sendQuery<T>(query: string, tries: number = 3): Promise<T> {
        this.logger.debug('send query :' + query);
        let url = this.graphApiUrl;
        const body = {query};
        const headers = {
            'Authorization': 'Bearer ' + this.getToken(),
            'Content-Type': 'application/json'
        };
        const response = await this.request<T>(url, body, headers, tries);
        return response.data;
    }


    private async request<T>(url: string, body: any, headers: any = {}, remainingTries = 1): Promise<AxiosResponse<T>> {
        const self = this;
        // const task = () => this.requestQueue.add(async () => {
        // return this.requestQueue.add(async () =>

        // return this.requestQueue.add(async () => {
            this.logger.debug('make request');
            try {
                // const requestTime = Date.now();
                // const response = await this.axios.post(url, body, {headers: headers});
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

                // abort retry, retries attempts exceeded
                // if (remainingTries === 1) throw new Error('Retry attempts exceeded');
                if (remainingTries === 1) throw error;

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

                return await self.request<T>(url, body, headers, remainingTries - 1);
            }
        // });
        // return pRetry(task, {retries: 5});
    }


    public async query(query: string): Promise<QueryResponse<Search>> {
        return this.sendQuery<QueryResponse<Search>>(query)
    }


    // public readonly search = {
    //     search: async (query: string): Promise<QueryResponse<Search>> =>
    //         this.sendQuery<QueryResponse<Search>>(query),
    // };

    public readonly access = {
        createEventManager: async (data: CreateEventManagerArguments): Promise<CreateEventManagerResponse> =>
            this.sendCommand<CreateEventManagerResponse>('CreateEventManager', data),
        createEventManagerAndPlanEvent: async (data: CreateEventManagerAndPlanEventArguments): Promise<CreateEventManagerAndPlanEventResponse> =>
            this.sendCommand<CreateEventManagerAndPlanEventResponse>('CreateEventManagerAndPlanEvent', data),

        // event
        planEvent: async (data: PlanEventArguments): Promise<PlanEventResponse> =>
            this.sendCommand<PlanEventResponse>('PlanEvent', data),
        renameEvent: async (data: RenameEventArguments): Promise<RenameEventResponse> =>
            this.sendCommand<RenameEventResponse>('RenameEvent', data),
        rescheduleEvent: async (data: RescheduleEventArguments): Promise<RescheduleEventResponse> =>
            this.sendCommand<RescheduleEventResponse>('RescheduleEvent', data),
        relocateEvent: async (data: RelocateEventArguments): Promise<RelocateEventResponse> =>
            this.sendCommand<RelocateEventResponse>('RelocateEvent', data),
        cancelEvent: async (data: CancelEventArguments): Promise<CancelEventResponse> =>
            this.sendCommand<CancelEventResponse>('CancelEvent', data),
        publishEvent: async (data: PublishEventArguments): Promise<PublishEventResponse> =>
            this.sendCommand<PublishEventResponse>('PublishEvent', data),
        draftEvent: async (data: DraftEventArguments): Promise<DraftEventResponse> =>
            this.sendCommand<DraftEventResponse>('DraftEvent', data),
        assignEventTag: async (data: AssignEventTagArguments): Promise<AssignEventTagResponse> =>
            this.sendCommand<AssignEventTagResponse>('AssignEventTag', data),
        revokeEventTag: async (data: RevokeEventTagArguments): Promise<RevokeEventTagResponse> =>
            this.sendCommand<RevokeEventTagResponse>('RevokeEventTag', data),
        changeEventTags: async (data: ChangeEventTagsArguments): Promise<ChangeEventTagsResponse> =>
            this.sendCommand<ChangeEventTagsResponse>('ChangeEventTags', data),
        addEventExternalId: async (data: AddEventExternalIdArguments): Promise<AddEventExternalIdResponse> =>
            this.sendCommand<AddEventExternalIdResponse>('AddEventExternalId', data),
        removeEventExternalId: async (data: RemoveEventExternalIdArguments): Promise<RemoveEventExternalIdResponse> =>
            this.sendCommand<RemoveEventExternalIdResponse>('RemoveEventExternalId', data),
        changeEventExternalIds: async (data: ChangeEventExternalIdsArguments): Promise<ChangeEventExternalIdsResponse> =>
            this.sendCommand<ChangeEventExternalIdsResponse>('ChangeEventExternalIds', data),
        applyEventTemplate: async (data: ApplyEventTemplateArguments): Promise<ApplyEventTemplateResponse> =>
            this.sendCommand<ApplyEventTemplateResponse>('ApplyEventTemplate', data),
        detachEventTemplate: async (data: DetachEventTemplateArguments): Promise<DetachEventTemplateResponse> =>
            this.sendCommand<DetachEventTemplateResponse>('DetachEventTemplate', data),

        // capacity
        addCapacity: async (data: AddCapacityArguments): Promise<AddCapacityResponse> =>
            this.sendCommand<AddCapacityResponse>('AddCapacity', data),
        changeCapacity: async (data: ChangeCapacityArguments): Promise<ChangeCapacityResponse> =>
            this.sendCommand<ChangeCapacityResponse>('ChangeCapacity', data),

        // access definition
        addAccessDefinition: async (data: AddAccessDefinitionArguments): Promise<AddAccessDefinitionResponse> =>
            this.sendCommand<AddAccessDefinitionResponse>('AddAccessDefinition', data),
        removeAccessDefinition: async (data: RemoveAccessDefinitionArguments): Promise<RemoveAccessDefinitionResponse> =>
            this.sendCommand<RemoveAccessDefinitionResponse>('RemoveAccessDefinition', data),
        renameAccessDefinition: async (data: RenameAccessDefinitionArguments): Promise<RenameAccessDefinitionResponse> =>
            this.sendCommand<RenameAccessDefinitionResponse>('RenameAccessDefinition', data),
        rescheduleAccessDefinition: async (data: RescheduleAccessDefinitionArguments): Promise<RescheduleAccessDefinitionResponse> =>
            this.sendCommand<RescheduleAccessDefinitionResponse>('RescheduleAccessDefinition', data),
        changeAccessDefinitionConditions: async (data: ChangeAccessDefinitionConditionsArguments): Promise<ChangeAccessDefinitionConditionsResponse> =>
            this.sendCommand<ChangeAccessDefinitionConditionsResponse>('ChangeAccessDefinitionConditions', data),
        addAccessDefinitionCapacityLocation: async (data: AddAccessDefinitionCapacityLocationArguments): Promise<AddAccessDefinitionCapacityLocationResponse> =>
            this.sendCommand<AddAccessDefinitionCapacityLocationResponse>('AddAccessDefinitionCapacityLocation', data),
        removeAccessDefinitionCapacityLocation: async (data: RemoveAccessDefinitionCapacityLocationArguments): Promise<RemoveAccessDefinitionCapacityLocationResponse> =>
            this.sendCommand<RemoveAccessDefinitionCapacityLocationResponse>('RemoveAccessDefinitionCapacityLocation', data),
        changeAccessDefinitionCapacityLocations: async (data: ChangeAccessDefinitionCapacityLocationsArguments): Promise<ChangeAccessDefinitionCapacityLocationsResponse> =>
            this.sendCommand<ChangeAccessDefinitionCapacityLocationsResponse>('ChangeAccessDefinitionCapacityLocations', data),
        changeAccessDefinitionCapacityLocationAllocation: async (data: ChangeAccessDefinitionCapacityLocationAllocationArguments): Promise<ChangeAccessDefinitionCapacityLocationAllocationResponse> =>
            this.sendCommand<ChangeAccessDefinitionCapacityLocationAllocationResponse>('ChangeAccessDefinitionCapacityLocationAllocation', data),
        changeAccessDefinitionUseLimit: async (data: ChangeAccessDefinitionUseLimitArguments): Promise<ChangeAccessDefinitionUseLimitResponse> =>
            this.sendCommand<ChangeAccessDefinitionUseLimitResponse>('ChangeAccessDefinitionUseLimit', data),
        assignAccessDefinitionTag: async (data: AssignAccessDefinitionTagArguments): Promise<AssignAccessDefinitionTagResponse> =>
            this.sendCommand<AssignAccessDefinitionTagResponse>('AssignAccessDefinitionTag', data),
        revokeAccessDefinitionTag: async (data: RevokeAccessDefinitionTagArguments): Promise<RevokeAccessDefinitionTagResponse> =>
            this.sendCommand<RevokeAccessDefinitionTagResponse>('RevokeAccessDefinitionTag', data),
        changeAccessDefinitionTags: async (data: ChangeAccessDefinitionTagsArguments): Promise<ChangeAccessDefinitionTagsResponse> =>
            this.sendCommand<ChangeAccessDefinitionTagsResponse>('ChangeAccessDefinitionTags', data),
        markAccessDefinitionAsTemplate: async (data: MarkAccessDefinitionAsTemplateArguments): Promise<MarkAccessDefinitionAsTemplateResponse> =>
            this.sendCommand<MarkAccessDefinitionAsTemplateResponse>('MarkAccessDefinitionAsTemplate', data),

        // access
        reserveAccess: async (data: ReserveAccessArguments): Promise<ReserveAccessResponse> =>
            this.sendCommand<ReserveAccessResponse>('ReserveAccess', data),
        grantAccess: async (data: GrantAccessArguments): Promise<GrantAccessResponse> =>
            this.sendCommand<GrantAccessResponse>('GrantAccess', data),
        returnAccess: async (data: ReturnAccessArguments): Promise<ReturnAccessResponse> =>
            this.sendCommand<ReturnAccessResponse>('ReturnAccess', data),
        useAccess: async (data: UseAccessArguments): Promise<UseAccessResponse> =>
            this.sendCommand<UseAccessResponse>('UseAccess', data, 1),

        // event template
        createEventTemplate: async (data: CreateEventTemplateArguments): Promise<CreateEventTemplateResponse> =>
            this.sendCommand<CreateEventTemplateResponse>('CreateEventTemplate', data),
        renameEventTemplate: async (data: RenameEventTemplateArguments): Promise<RenameEventTemplateResponse> =>
            this.sendCommand<RenameEventTemplateResponse>('RenameEventTemplate', data),
        addEventTemplateCapacity: async (data: AddEventTemplateCapacityArguments): Promise<AddEventTemplateCapacityResponse> =>
            this.sendCommand<AddEventTemplateCapacityResponse>('AddEventTemplateCapacity', data),
        changeEventTemplateCapacity: async (data: ChangeEventTemplateCapacityArguments): Promise<ChangeEventTemplateCapacityResponse> =>
            this.sendCommand<ChangeEventTemplateCapacityResponse>('ChangeEventTemplateCapacity', data),
        addEventTemplateAccessDefinition: async (data: AddEventTemplateAccessDefinitionArguments): Promise<AddEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<AddEventTemplateAccessDefinitionResponse>('AddEventTemplateAccessDefinition', data),
        removeEventTemplateAccessDefinition: async (data: RemoveEventTemplateAccessDefinitionArguments): Promise<RemoveEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<RemoveEventTemplateAccessDefinitionResponse>('RemoveEventTemplateAccessDefinition', data),
        rescheduleEventTemplateAccessDefinition: async (data: RescheduleEventTemplateAccessDefinitionArguments): Promise<RescheduleEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<RescheduleEventTemplateAccessDefinitionResponse>('RescheduleEventTemplateAccessDefinition', data),
        renameEventTemplateAccessDefinition: async (data: RenameEventTemplateAccessDefinitionArguments): Promise<RenameEventTemplateAccessDefinitionResponse> =>
            this.sendCommand<RenameEventTemplateAccessDefinitionResponse>('RenameEventTemplateAccessDefinition', data),
        changeEventTemplateAccessDefinitionCapacityLocationAllocation: async (data: ChangeEventTemplateAccessDefinitionCapacityLocationAllocationArguments): Promise<ChangeEventTemplateAccessDefinitionCapacityLocationAllocationResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionCapacityLocationAllocationResponse>('ChangeEventTemplateAccessDefinitionCapacityLocationAllocation', data),
        changeEventTemplateAccessDefinitionConditions: async (data: ChangeEventTemplateAccessDefinitionConditionsArguments): Promise<ChangeEventTemplateAccessDefinitionConditionsResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionConditionsResponse>('ChangeEventTemplateAccessDefinitionConditions', data),
        changeEventTemplateAccessDefinitionTags: async (data: ChangeEventTemplateAccessDefinitionTagsArguments): Promise<ChangeEventTemplateAccessDefinitionTagsResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionTagsResponse>('ChangeEventTemplateAccessDefinitionTags', data),
        changeEventTemplateAccessDefinitionUseLimit: async (data: ChangeEventTemplateAccessDefinitionUseLimitArguments): Promise<ChangeEventTemplateAccessDefinitionUseLimitResponse> =>
            this.sendCommand<ChangeEventTemplateAccessDefinitionUseLimitResponse>('ChangeEventTemplateAccessDefinitionUseLimit', data),
        assignEventTemplateAccessDefinitionLocation: async (data: AssignEventTemplateAccessDefinitionLocationArguments): Promise<AssignEventTemplateAccessDefinitionLocationResponse> =>
            this.sendCommand<AssignEventTemplateAccessDefinitionLocationResponse>('AssignEventTemplateAccessDefinitionLocation', data),

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
        createOrder: async (data: CreateOrderArguments): Promise<CreateOrderResponse> =>
            this.sendCommand<CreateOrderResponse>('CreateOrder', data),
        addAccessToCart: async (data: AddAccessToCartArguments): Promise<AddAccessToCartResponse> =>
            this.sendCommand<AddAccessToCartResponse>('AddAccessToCart', data),
        addProductToCart: async (data: AddProductToCartArguments): Promise<AddProductToCartResponse> =>
            this.sendCommand<AddProductToCartResponse>('AddProductToCart', data),
        reserveAccessInCart: async (data: ReserveAccessInCartArguments): Promise<ReserveAccessInCartResponse> =>
            this.sendCommand<ReserveAccessInCartResponse>('ReserveAccessInCart', data),
        reserveProductInCart: async (data: ReserveProductInCartArguments): Promise<ReserveProductInCartResponse> =>
            this.sendCommand<ReserveProductInCartResponse>('ReserveProductInCart', data),
        completeItemInCart: async (data: CompleteItemInCartArguments): Promise<CompleteItemInCartResponse> =>
            this.sendCommand<CompleteItemInCartResponse>('CompleteItemInCart', data),
        removeItemFromCart: async (data: RemoveItemFromCartArguments): Promise<RemoveItemFromCartResponse> =>
            this.sendCommand<RemoveItemFromCartResponse>('RemoveItemFromCart', data),
        cancelOrder: async (data: CancelOrderArguments): Promise<CancelOrderResponse> =>
            this.sendCommand<CancelOrderResponse>('CancelOrder', data),
        checkoutOrder: async (data: CheckoutOrderArguments): Promise<CheckoutOrderResponse> =>
            this.sendCommand<CheckoutOrderResponse>('CheckoutOrder', data),
        completeOrder: async (data: CompleteOrderArguments): Promise<CompleteOrderResponse> =>
            this.sendCommand<CompleteOrderResponse>('CompleteOrder', data),
        addOrderToken: async (data: AddOrderTokenArguments): Promise<AddOrderTokenResponse> =>
            this.sendCommand<AddOrderTokenResponse>('AddOrderToken', data),
        // getOrder: async (query: string): Promise<QueryResponse<Order>> =>
        //     this.sendQuery<QueryResponse<Order>>(query),
        // getOrders: async (query: string): Promise<QueryResponse<Array<Order>>> =>
        //     this.sendQuery<QueryResponse<Array<Order>>>(query),
        addTimeoutSetting: async (data: AddTimeoutSettingArguments): Promise<AddTimeoutSettingResponse> =>
            this.sendCommand<AddTimeoutSettingResponse>('AddTimeoutSetting', data),
        changeTimeoutSetting: async (data: ChangeTimeoutSettingArguments): Promise<ChangeTimeoutSettingResponse> =>
            this.sendCommand<ChangeTimeoutSettingResponse>('ChangeTimeoutSetting', data),
        removeTimeoutSetting: async (data: RemoveTimeoutSettingArguments): Promise<RemoveTimeoutSettingResponse> =>
            this.sendCommand<RemoveTimeoutSettingResponse>('RemoveTimeoutSetting', data),
    };

    public readonly payment = {
        addAdyenClientSettings: async (data: AddAdyenClientSettingsArguments): Promise<AddAdyenClientSettingsResponse> =>
            this.sendCommand<AddAdyenClientSettingsResponse>('AddAdyenClientSettings', data),
        editAdyenClientSettings: async (data: EditAdyenClientSettingsArguments): Promise<EditAdyenClientSettingsResponse> =>
            this.sendCommand<EditAdyenClientSettingsResponse>('EditAdyenClientSettings', data),
        addMollieClientSettings: async (data: AddMollieClientSettingsArguments): Promise<AddMollieClientSettingsResponse> =>
            this.sendCommand<AddMollieClientSettingsResponse>('AddMollieClientSettings', data),
        editMollieClientSettings: async (data: EditMollieClientSettingsArguments): Promise<EditMollieClientSettingsResponse> =>
            this.sendCommand<EditMollieClientSettingsResponse>('EditMollieClientSettings', data),
        createCashPayment: async (data: CreateCashPaymentArguments): Promise<CreateCashPaymentResponse> =>
            this.sendCommand<CreateCashPaymentResponse>('CreateCashPayment', data),
        createPinPayment: async (data: CreatePinPaymentArguments): Promise<CreatePinPaymentResponse> =>
            this.sendCommand<CreatePinPaymentResponse>('CreatePinPayment', data),
        createAdyenPaymentSession: async (data: CreateAdyenPaymentSessionArguments): Promise<CreateAdyenPaymentSessionResponse> =>
            this.sendCommand<CreateAdyenPaymentSessionResponse>('CreateAdyenPaymentSession', data),
        createMolliePayment: async (data: CreateMolliePaymentArguments): Promise<CreateMolliePaymentResponse> =>
            this.sendCommand<CreateMolliePaymentResponse>('CreateMolliePayment', data),
    };

    public readonly customer = {
        createCustomer: async (data: CreateCustomerArguments): Promise<CreateCustomerResponse> =>
            this.sendCommand<CreateCustomerResponse>('CreateCustomer', data),
        changeCustomer: async (data: ChangeCustomerArguments): Promise<ChangeCustomerResponse> =>
            this.sendCommand<ChangeCustomerResponse>('ChangeCustomer', data),
        removeCustomer: async (data: RemoveCustomerArguments): Promise<RemoveCustomerResponse> =>
            this.sendCommand<RemoveCustomerResponse>('RemoveCustomer', data),
    };

    public readonly email = {
        addMailgunClientSettings: async (data: AddMailgunClientSettingsArguments): Promise<AddMailgunClientSettingsResponse> =>
            this.sendCommand<AddMailgunClientSettingsResponse>('AddMailgunClientSettings', data),
        editMailgunClientSettings: async (data: EditMailgunClientSettingsArguments): Promise<EditMailgunClientSettingsResponse> =>
            this.sendCommand<EditMailgunClientSettingsResponse>('EditMailgunClientSettings', data),
        sendEmail: async (data: SendEmailArguments): Promise<SendEmailResponse> =>
            this.sendCommand<SendEmailResponse>('SendEmail', data),
        addEmailTemplate: async (data: AddEmailTemplateArguments): Promise<AddEmailTemplateResponse> =>
            this.sendCommand<AddEmailTemplateResponse>('AddEmailTemplate', data),
        editEmailTemplate: async (data: EditEmailTemplateArguments): Promise<EditEmailTemplateResponse> =>
            this.sendCommand<EditEmailTemplateResponse>('EditEmailTemplate', data),
        removeEmailTemplate: async (data: RemoveEmailTemplateArguments): Promise<RemoveEmailTemplateResponse> =>
            this.sendCommand<RemoveEmailTemplateResponse>('RemoveEmailTemplate', data),
        sendEmailTemplate: async (data: SendEmailTemplateArguments): Promise<SendEmailTemplateResponse> =>
            this.sendCommand<SendEmailTemplateResponse>('SendEmailTemplate', data),
    };

    public readonly salesChannel = {
        createSalesChannel: async (data: CreateSalesChannelArguments): Promise<CreateSalesChannelResponse> =>
            this.sendCommand<CreateSalesChannelResponse>('CreateSalesChannel', data),
        renameSalesChannel: async (data: RenameSalesChannelArguments): Promise<RenameSalesChannelResponse> =>
            this.sendCommand<RenameSalesChannelResponse>('RenameSalesChannel', data),
        addRegister: async (data: AddRegisterArguments): Promise<AddRegisterResponse> =>
            this.sendCommand<AddRegisterResponse>('AddRegister', data),
        renameRegister: async (data: RenameRegisterArguments): Promise<RenameRegisterResponse> =>
            this.sendCommand<RenameRegisterResponse>('RenameRegister', data),
        removeRegister: async (data: RemoveRegisterArguments): Promise<RemoveRegisterResponse> =>
            this.sendCommand<RemoveRegisterResponse>('RemoveRegister', data),
        addDeliveryDefinition: async (data: AddDeliveryDefinitionArguments): Promise<AddDeliveryDefinitionResponse> =>
            this.sendCommand<AddDeliveryDefinitionResponse>('AddDeliveryDefinition', data),
        editDeliveryDefinition: async (data: EditDeliveryDefinitionArguments): Promise<EditDeliveryDefinitionResponse> =>
            this.sendCommand<EditDeliveryDefinitionResponse>('EditDeliveryDefinition', data),
        removeDeliveryDefinition: async (data: RemoveDeliveryDefinitionArguments): Promise<RemoveDeliveryDefinitionResponse> =>
            this.sendCommand<RemoveDeliveryDefinitionResponse>('RemoveDeliveryDefinition', data),
        // changeDeliveryDefinitionCondition: async (data: ChangeDeliveryDefinitionConditionArguments): Promise<ChangeDeliveryDefinitionConditionResponse> =>
        //     this.sendCommand<ChangeDeliveryDefinitionConditionResponse>('ChangeDeliveryDefinitionCondition', data),
        // changeDeliveryDefinitionContent: async (data: ChangeDeliveryDefinitionContentArguments): Promise<ChangeDeliveryDefinitionContentResponse> =>
        //     this.sendCommand<ChangeDeliveryDefinitionContentResponse>('ChangeDeliveryDefinitionContent', data),
        // renameDeliveryDefinition: async (data: RenameDeliveryDefinitionArguments): Promise<RenameDeliveryDefinitionResponse> =>
        //     this.sendCommand<RenameDeliveryDefinitionResponse>('RenameDeliveryDefinition', data),
        // createEmailDelivery: async (data: CreateEmailDeliveryArguments): Promise<CreateEmailDeliveryResponse> =>
        //     this.sendCommand<CreateEmailDeliveryResponse>('CreateEmailDelivery', data),
    };

    public readonly user = {
        createUser: async (data: CreateUserArguments): Promise<CreateUserResponse> =>
            this.sendCommand<CreateUserResponse>('CreateUser', data),
        changeUserScope: async (data: ChangeUserScopeArguments): Promise<ChangeUserScopeResponse> =>
            this.sendCommand<ChangeUserScopeResponse>('ChangeUserScope', data),
        changeUserPassword: async (data: ChangeUserPasswordArguments): Promise<ChangeUserPasswordResponse> =>
            this.sendCommand<ChangeUserPasswordResponse>('ChangeUserPassword', data),
        resetUserPassword: async (data: ResetUserPasswordArguments): Promise<ResetUserPasswordResponse> =>
            this.sendCommand<ResetUserPasswordResponse>('ResetUserPassword', data),
        enableUser: async (data: EnableUserArguments): Promise<EnableUserResponse> =>
            this.sendCommand<EnableUserResponse>('EnableUser', data),
        disableUser: async (data: DisableUserArguments): Promise<DisableUserResponse> =>
            this.sendCommand<DisableUserResponse>('DisableUser', data),
        getAuthToken: async (data: GetAuthTokenArguments): Promise<GetAuthTokenResponse> =>
            this.getAuthToken<GetAuthTokenResponse>(data),
    };

    public readonly tag = {
        createTag: async (data: CreateTagArguments): Promise<CreateTagResponse> =>
            this.sendCommand<CreateTagResponse>('CreateTag', data),
        renameTag: async (data: RenameTagArguments): Promise<RenameTagResponse> =>
            this.sendCommand<RenameTagResponse>('RenameTag', data),
        removeTag: async (data: RemoveTagArguments): Promise<RemoveTagResponse> =>
            this.sendCommand<RemoveTagResponse>('RemoveTag', data),
    };

    public readonly tokens = {
        createCoupon: async (data: CreateCouponArguments): Promise<CreateCouponResponse> =>
            this.sendCommand<CreateCouponResponse>('CreateCoupon', data),
        changeCoupon: async (data: ChangeCouponArguments): Promise<ChangeCouponResponse> =>
            this.sendCommand<ChangeCouponResponse>('ChangeCoupon', data),
        createTokens: async (data: CreateTokensArguments): Promise<CreateTokensResponse> =>
            this.sendCommand<CreateTokensResponse>('CreateTokens', data),
        removeToken: async (data: RemoveTokenArguments): Promise<RemoveTokenResponse> =>
            this.sendCommand<RemoveTokenResponse>('RemoveToken', data),
        useToken: async (data: UseTokenArguments): Promise<UseTokenResponse> =>
            this.sendCommand<UseTokenResponse>('UseToken', data),
    };

    public readonly batchOperation = {
        startBatchOperation: async (data: StartBatchOperationArguments): Promise<StartBatchOperationResponse> =>
            this.sendCommand<StartBatchOperationResponse>('StartBatchOperation', data),
    };
}


export interface WebClientOptions {
    authUrl?: string;
    adminApiUrl?: string;
    graphApiUrl?: string;
    token?: string;
    logger?: any;
}

