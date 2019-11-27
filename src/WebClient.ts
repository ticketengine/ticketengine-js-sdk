import axios, {AxiosInstance, AxiosResponse} from 'axios';
// import { ApiCallOptions, ApiCallResult } from './apiCall';
// @ts-ignore
// const PQueue = require('p-queue');
import * as Promise from 'bluebird';
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
    ChangeAccessDefinitionCapacityLocationsArguments, ChangeAccessDefinitionCapacityLocationsResponse
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
    CompleteOrderResponse
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
    SendEmailResponse
} from './command/email';
// import {Access, AccessDefinition, Event, Order, QueryResponse, Search} from "./query";
import {QueryResponse, Search} from "./query";
import {
    AddDeliveryDefinitionArguments,
    AddDeliveryDefinitionResponse,
    ChangeDeliveryDefinitionConditionArguments,
    ChangeDeliveryDefinitionConditionResponse,
    ChangeDeliveryDefinitionContentArguments,
    ChangeDeliveryDefinitionContentResponse, CreateEmailDeliveryArguments, CreateEmailDeliveryResponse,
    CreateSalesChannelArguments,
    CreateSalesChannelResponse, RenameDeliveryDefinitionArguments, RenameDeliveryDefinitionResponse,
    RenameSalesChannelArguments,
    RenameSalesChannelResponse,
    CreateRegisterArguments,
    CreateRegisterResponse,
    RenameRegisterArguments,
    RenameRegisterResponse,
    RemoveRegisterArguments,
    RemoveRegisterResponse
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
    DisableUserResponse, GetAuthTokenArguments, GetAuthTokenResponse
} from "./command/user";
import {
    CreateTagArguments,
    CreateTagResponse,
    RemoveTagArguments,
    RemoveTagResponse,
    RenameTagArguments,
    RenameTagResponse
} from "./command/tag";
// import * as apiResponse from './Responses';


export class WebClient {


    private axios: AxiosInstance;

    // private requestQueue: PQueue;

    // private requestQueue: TaskQueue<Promise<AxiosResponse>>;
    private requestQueue: TaskQueue<Promise>;

    private logger: LoggerInterface;

    private token: string;

    private readonly apiUrl: string;


    // constructor({apiUrl = 'https://ticketengine.com/api/'}: WebClientOptions) {
    constructor(token?: string, logger?: LoggerInterface, apiUrl?: string) {
        this.token = token || '';
        this.apiUrl = apiUrl || 'https://admin-api.ticketengine.io/';
        this.logger = logger || new Logger();
        // this.requestQueue = new PQueue({concurrency: 1});
        this.requestQueue = new TaskQueue(Promise, 1);
        this.axios = axios.create({
            // baseURL: apiUrl || 'https://ticketengine.com/api/',
            // headers: Object.assign({
            //     'User-Agent': getUserAgent(),
            // }, headers),
            // httpAgent: agentForScheme('http', agent),
            // httpsAgent: agentForScheme('https', agent),
            // transformRequest: [this.serializeApiCallOptions.bind(this)],
            // validateStatus: () => true, // all HTTP status codes should result in a resolved promise (as opposed to only 2xx)
            // maxRedirects: 0,
            withCredentials: true,
            // timeout: 10000,
        });
        // this.axios.defaults.raxConfig = {
        //     instance: this.axios
        // };
        // attach(this.axios);
    }

    private async getAuthToken<GetAuthTokenResponse>(data: GetAuthTokenArguments): Promise<GetAuthTokenResponse> {
        /*******************************************************************************
         * START TEMP BLOCK
         ******************************************************************************/
        let url = 'http://auth.default.svc.cluster.local:8000/token';
        /*******************************************************************************
         * END TEMP BLOCK
         ******************************************************************************/
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await this.request<GetAuthTokenResponse>(url, data, headers, 3);
        if(response.data.access_token) this.token = response.data.access_token;
        if(response.data.data.accessToken) this.token = response.data.data.accessToken;
        return response.data;
    }


    private async sendCommand<T>(command: string, commandData: any): Promise<T> {
        this.logger.debug('send command: ' + command);

        /*******************************************************************************
         * START TEMP BLOCK
         ******************************************************************************/
        let url = 'http://access.default.svc.cluster.local:8000/';

        const orderCommands = ['CreateOrder', 'AddAccessToCart', 'AddProductToCart', 'ReserveAccessInCart', 'ReserveProductInCart', 'CompleteItemInCart', 'RemoveItemFromCart', 'CancelOrder', 'CheckoutOrder', 'CompleteOrder'];
        if(orderCommands.indexOf(command) !== -1) {
            url = 'http://order.default.svc.cluster.local:8000/';
        }
        const paymentCommands = ['AddAdyenClientSettings', 'EditAdyenClientSettings', 'CreateCashPayment', 'CreatePinPayment', 'CreateAdyenPaymentSession'];
        if(paymentCommands.indexOf(command) !== -1) {
            url = 'http://payment.default.svc.cluster.local:8000/';
        }
        const emailCommands = ['AddMailgunClientSettings', 'EditMailgunClientSettings', 'SendEmail'];
        if(emailCommands.indexOf(command) !== -1) {
            url = 'http://email.default.svc.cluster.local:8000/';
        }
        const salesChannelCommands = ['CreateSalesChannel', 'RenameSalesChannel', 'CreateRegister', 'RenameRegister', 'RemoveRegister', 'AddDeliveryDefinition', 'ChangeDeliveryDefinitionCondition', 'ChangeDeliveryDefinitionContent', 'RenameDeliveryDefinition', 'CreateEmailDelivery'];
        if(salesChannelCommands.indexOf(command) !== -1) {
            url = 'http://sales-channel.default.svc.cluster.local:8000/';
        }
        const customerCommands = ['CreateCustomer', 'ChangeCustomer', 'RemoveCustomer'];
        if(customerCommands.indexOf(command) !== -1) {
            url = 'http://customer.default.svc.cluster.local:8000/';
        }
        const authCommands = ['CreateUser', 'ChangeUserScope', 'ChangeUserPassword', 'EnableUser', 'DisableUser'];
        if(authCommands.indexOf(command) !== -1) {
            url = 'http://auth.default.svc.cluster.local:8000/';
        }
        const tagCommands = ['CreateTag', 'RenameTag', 'RemoveTag'];
        if(tagCommands.indexOf(command) !== -1) {
            url = 'http://tag.default.svc.cluster.local:8000/';
        }

        const headers = {
            'Authentication': 'Bearer ' + this.token,
            'X-Command': command,
            'Content-Type': 'application/json',
            'X-Client-Id': '650533a2-3b62-11e9-b210-d663bd873d93',
            'X-Correlation-Id': '76053244-3b62-11e9-b210-d663bd873d23',
            'X-User-Id': '650534e2-3b62-11e9-b210-d663bd873d93',
        };

        const body = Object.assign(
            {
                // command,
                // 'correlationId': '76053244-3b62-11e9-b210-d663bd873d23',
                // 'clientId': '650533a2-3b62-11e9-b210-d663bd873d93',
                // 'userId': '650534e2-3b62-11e9-b210-d663bd873d93',
            },
            commandData
        );
        /*******************************************************************************
         * END TEMP BLOCK
         ******************************************************************************/

        const response = await this.request<T>(url, body, headers, 3);
        return response.data;

//         try {
//             const response = await this.request<T>(url, body, headers);
//             return response.data;
//         } catch (e) {
// console.error(e);
//         }

        // const response = await this.requesturl, body, headers);
        // const result = this.buildResult(response);

        // if (!result.ok) {
        //     throw new Error(result.error);
        // }

        // return result;

    }


    private async sendQuery<T>(query: string): Promise<T> {
        this.logger.debug('send query :' + query);

        /*******************************************************************************
         * START TEMP BLOCK
         ******************************************************************************/

        let url = this.apiUrl;
        url = 'http://graph-api.default.svc.cluster.local:8000';

        /*******************************************************************************
         * END TEMP BLOCK
         ******************************************************************************/

        // const url = this.apiUrl;
        const body = {query};
        const headers = {
            'Authentication': this.token,
            'Content-Type': 'application/json'
        };
        const response = await this.request<T>(url, body, headers, 3);
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
                this.logger.debug('request failed with status: ' + error.response.status);
                // this.logger.debug(error.response.body);

                // abort retry, retries attempts exceeded
                if (remainingTries === 1) throw error;

                // abort retry, unauthorized
                if(error.response.status === 401) throw error;

                // abort retry, resource doesn't exist
                if(error.response.status === 404) throw error;

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
        planEvent: async (data: PlanEventArguments): Promise<PlanEventResponse> =>
            this.sendCommand<PlanEventResponse>('PlanEvent', data),
        renameEvent: async (data: RenameEventArguments): Promise<RenameEventResponse> =>
            this.sendCommand<RenameEventResponse>('RenameEvent', data),
        rescheduleEvent: async (data: RescheduleEventArguments): Promise<RescheduleEventResponse> =>
            this.sendCommand<RescheduleEventResponse>('RescheduleEvent', data),
        cancelEvent: async (data: CancelEventArguments): Promise<CancelEventResponse> =>
            this.sendCommand<CancelEventResponse>('CancelEvent', data),
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
        addCapacity: async (data: AddCapacityArguments): Promise<AddCapacityResponse> =>
            this.sendCommand<AddCapacityResponse>('AddCapacity', data),
        changeCapacity: async (data: ChangeCapacityArguments): Promise<ChangeCapacityResponse> =>
            this.sendCommand<ChangeCapacityResponse>('ChangeCapacity', data),
        addAccessDefinition: async (data: AddAccessDefinitionArguments): Promise<AddAccessDefinitionResponse> =>
            this.sendCommand<AddAccessDefinitionResponse>('AddAccessDefinition', data),
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
        reserveAccess: async (data: ReserveAccessArguments): Promise<ReserveAccessResponse> =>
            this.sendCommand<ReserveAccessResponse>('ReserveAccess', data),
        grantAccess: async (data: GrantAccessArguments): Promise<GrantAccessResponse> =>
            this.sendCommand<GrantAccessResponse>('GrantAccess', data),
        returnAccess: async (data: ReturnAccessArguments): Promise<ReturnAccessResponse> =>
            this.sendCommand<ReturnAccessResponse>('ReturnAccess', data),
        useAccess: async (data: UseAccessArguments): Promise<UseAccessResponse> =>
            this.sendCommand<UseAccessResponse>('UseAccess', data),
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
        // getOrder: async (query: string): Promise<QueryResponse<Order>> =>
        //     this.sendQuery<QueryResponse<Order>>(query),
        // getOrders: async (query: string): Promise<QueryResponse<Array<Order>>> =>
        //     this.sendQuery<QueryResponse<Array<Order>>>(query),
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
    };

    public readonly salesChannel = {
        createSalesChannel: async (data: CreateSalesChannelArguments): Promise<CreateSalesChannelResponse> =>
            this.sendCommand<CreateSalesChannelResponse>('CreateSalesChannel', data),
        renameSalesChannel: async (data: RenameSalesChannelArguments): Promise<RenameSalesChannelResponse> =>
            this.sendCommand<RenameSalesChannelResponse>('RenameSalesChannel', data),
        createRegister: async (data: CreateRegisterArguments): Promise<CreateRegisterResponse> =>
            this.sendCommand<CreateRegisterResponse>('CreateRegister', data),
        renameRegister: async (data: RenameRegisterArguments): Promise<RenameRegisterResponse> =>
            this.sendCommand<RenameRegisterResponse>('RenameRegister', data),
        removeRegister: async (data: RemoveRegisterArguments): Promise<RemoveRegisterResponse> =>
            this.sendCommand<RemoveRegisterResponse>('RemoveRegister', data),
        addDeliveryDefinition: async (data: AddDeliveryDefinitionArguments): Promise<AddDeliveryDefinitionResponse> =>
            this.sendCommand<AddDeliveryDefinitionResponse>('AddDeliveryDefinition', data),
        changeDeliveryDefinitionCondition: async (data: ChangeDeliveryDefinitionConditionArguments): Promise<ChangeDeliveryDefinitionConditionResponse> =>
            this.sendCommand<ChangeDeliveryDefinitionConditionResponse>('ChangeDeliveryDefinitionCondition', data),
        changeDeliveryDefinitionContent: async (data: ChangeDeliveryDefinitionContentArguments): Promise<ChangeDeliveryDefinitionContentResponse> =>
            this.sendCommand<ChangeDeliveryDefinitionContentResponse>('ChangeDeliveryDefinitionContent', data),
        renameDeliveryDefinition: async (data: RenameDeliveryDefinitionArguments): Promise<RenameDeliveryDefinitionResponse> =>
            this.sendCommand<RenameDeliveryDefinitionResponse>('RenameDeliveryDefinition', data),
        createEmailDelivery: async (data: CreateEmailDeliveryArguments): Promise<CreateEmailDeliveryResponse> =>
            this.sendCommand<CreateEmailDeliveryResponse>('CreateEmailDelivery', data),
    };

    public readonly user = {
        createUser: async (data: CreateUserArguments): Promise<CreateUserResponse> =>
            this.sendCommand<CreateUserResponse>('CreateUser', data),
        changeUserScope: async (data: ChangeUserScopeArguments): Promise<ChangeUserScopeResponse> =>
            this.sendCommand<ChangeUserScopeResponse>('ChangeUserScope', data),
        changeUserPassword: async (data: ChangeUserPasswordArguments): Promise<ChangeUserPasswordResponse> =>
            this.sendCommand<ChangeUserPasswordResponse>('ChangeUserPassword', data),
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
}


