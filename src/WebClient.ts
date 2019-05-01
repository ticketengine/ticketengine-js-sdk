import axios, {AxiosInstance, AxiosResponse} from 'axios';
// import { ApiCallOptions, ApiCallResult } from './apiCall';
// @ts-ignore
// import PQueue = require('p-queue');
import {LoggerInterface} from './LoggerInterface';
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
    MarkAccessDefinitionAsTemplateArguments, MarkAccessDefinitionAsTemplateResponse
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
    CreateCashPaymentArguments,
    CreateCashPaymentResponse,
    CreateAdyenPaymentSessionArguments,
    CreateAdyenPaymentSessionResponse
} from './command/payment';
import {
    AddMailgunClientSettingsArguments,
    AddMailgunClientSettingsResponse,
    EditMailgunClientSettingsArguments,
    EditMailgunClientSettingsResponse,
    SendEmailArguments,
    SendEmailResponse
} from './command/email';
import {Access, AccessDefinition, Event, Order, QueryResponse} from "./query";
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
    RenameSalesChannelResponse
} from "./command/salesChannel";

// import * as apiResponse from './Responses';


export class WebClient {


    private axios: AxiosInstance;

    // private requestQueue: PQueue;

    private logger: LoggerInterface;

    private readonly token: string;

    private readonly apiUrl: string;


    // constructor({apiUrl = 'https://ticketengine.com/api/'}: WebClientOptions) {
    constructor(token: string, logger: LoggerInterface, apiUrl?: string) {
        this.token = token;
        this.apiUrl = apiUrl || 'https://ticketengine.com/api/';
        this.logger = logger;
        // this.requestQueue = new PQueue({concurrency: 1});
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
        });
    }


    private async sendCommand<T>(command: string, commandData: any): Promise<T> {
        this.logger.debug('send command :' + command);

        /*******************************************************************************
         * START TEMP BLOCK
         ******************************************************************************/
        let url = 'http://access-command.ticketengine.localhost:8000/';

        const orderCommands = ['CreateOrder', 'AddAccessToCart', 'AddProductToCart', 'ReserveAccessInCart', 'ReserveProductInCart', 'CompleteItemInCart', 'RemoveItemFromCart', 'CancelOrder'];
        if(orderCommands.indexOf(command) !== -1) {
            url = 'http://order-command.ticketengine.localhost:8000/';
        }
        const paymentCommands = ['AddAdyenClientSettings', 'EditAdyenClientSettings', 'CreateCashPayment', 'CreateAdyenPaymentSession'];
        if(paymentCommands.indexOf(command) !== -1) {
            url = 'http://payment-command.ticketengine.localhost:8000/';
        }
        const emailCommands = ['AddMailgunClientSettings', 'EditMailgunClientSettings', 'SendEmail'];
        if(emailCommands.indexOf(command) !== -1) {
            url = 'http://email-command.ticketengine.localhost:8000/';
        }
        const salesChannelCommands = ['CreateSalesChannel', 'RenameSalesChannel', 'AddDeliveryDefinition', 'ChangeDeliveryDefinitionCondition', 'ChangeDeliveryDefinitionContent', 'RenameDeliveryDefinition', 'CreateEmailDelivery'];
        if(salesChannelCommands.indexOf(command) !== -1) {
            url = 'http://sales-channel-command.ticketengine.localhost:8000/';
        }

        const headers = {
            'Authentication': this.token,
            'Content-Type': 'application/json'
        };

        const body = Object.assign(
            {
                command,
                'correlationId': '76053244-3b62-11e9-b210-d663bd873d23',
                'clientId': '650533a2-3b62-11e9-b210-d663bd873d93',
                'userId': '650534e2-3b62-11e9-b210-d663bd873d93',
            },
            commandData
        );
        /*******************************************************************************
         * END TEMP BLOCK
         ******************************************************************************/

        const response = await this.request<T>(url, body, headers);
        return response.data;

        // const response = await this.requesturl, body, headers);
        // const result = this.buildResult(response);

        // if (!result.ok) {
        //     throw new Error(result.error);
        // }

        // return result;

    }


    private async sendQuery<T>(query: string): Promise<T> {
        this.logger.debug('send query :' + query);
        const url = this.apiUrl; // http://graphql-query.ticketengine.localhost:8000
        const body = {query};
        const headers = {
            'Authentication': this.token,
            'Content-Type': 'application/json'
        };

        const response = await this.request<T>(url, body, headers);
        return response.data;
    }


    private async request<T>(url: string, body: any, headers: any = {}): Promise<AxiosResponse<T>> {
        // const task = () => this.requestQueue.add(async () => {
            this.logger.debug('make request');
            try {
                // const requestTime = Date.now();
                const response = await this.axios.post(url, body, headers);
                this.logger.debug('response received');
                return response;
            } catch (error) {
                this.logger.debug('request failed');
                // this.logger.debug(error.response.data);

                // // Abort retrying if the resource doesn't exist
                // if (response.status === 404) {
                //     throw new pRetry.AbortError(response.statusText);
                // }

                if (error.request) {
                    // throw requestErrorWithOriginal(error);
                }
                throw error;
            }
        // });

        // return pRetry(task, {retries: 5});
    }


    public readonly access = {
        createEventManager: async (data: CreateEventManagerArguments): Promise<CreateEventManagerResponse> =>
            this.sendCommand<CreateEventManagerResponse>('CreateEventManager', data),
        planEvent: async (data: PlanEventArguments): Promise<PlanEventResponse> =>
            this.sendCommand<PlanEventResponse>('PlanEvent', data),
        renameEvent: async (data: RenameEventArguments): Promise<RenameEventResponse> =>
            this.sendCommand<RenameEventResponse>('RenameEvent', data),
        rescheduleEvent: async (data: RescheduleEventArguments): Promise<RescheduleEventResponse> =>
            this.sendCommand<RescheduleEventResponse>('RescheduleEvent', data),
        assignEventTag: async (data: AssignEventTagArguments): Promise<AssignEventTagResponse> =>
            this.sendCommand<AssignEventTagResponse>('AssignEventTag', data),
        revokeEventTag: async (data: RevokeEventTagArguments): Promise<RevokeEventTagResponse> =>
            this.sendCommand<RevokeEventTagResponse>('RevokeEventTag', data),
        addEventExternalId: async (data: AddEventExternalIdArguments): Promise<AddEventExternalIdResponse> =>
            this.sendCommand<AddEventExternalIdResponse>('AddEventExternalId', data),
        removeEventExternalId: async (data: RemoveEventExternalIdArguments): Promise<RemoveEventExternalIdResponse> =>
            this.sendCommand<RemoveEventExternalIdResponse>('RemoveEventExternalId', data),
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
        changeAccessDefinitionCapacityLocationAllocation: async (data: ChangeAccessDefinitionCapacityLocationAllocationArguments): Promise<ChangeAccessDefinitionCapacityLocationAllocationResponse> =>
            this.sendCommand<ChangeAccessDefinitionCapacityLocationAllocationResponse>('ChangeAccessDefinitionCapacityLocationAllocation', data),
        changeAccessDefinitionUseLimit: async (data: ChangeAccessDefinitionUseLimitArguments): Promise<ChangeAccessDefinitionUseLimitResponse> =>
            this.sendCommand<ChangeAccessDefinitionUseLimitResponse>('ChangeAccessDefinitionUseLimit', data),
        assignAccessDefinitionTag: async (data: AssignAccessDefinitionTagArguments): Promise<AssignAccessDefinitionTagResponse> =>
            this.sendCommand<AssignAccessDefinitionTagResponse>('AssignAccessDefinitionTag', data),
        revokeAccessDefinitionTag: async (data: RevokeAccessDefinitionTagArguments): Promise<RevokeAccessDefinitionTagResponse> =>
            this.sendCommand<RevokeAccessDefinitionTagResponse>('RevokeAccessDefinitionTag', data),
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
        getEvent: async (query: string): Promise<QueryResponse<Event>> =>
            this.sendQuery<QueryResponse<Event>>(query),
        getEvents: async (query: string): Promise<QueryResponse<Array<Event>>> =>
            this.sendQuery<QueryResponse<Array<Event>>>(query),
        getAccess: async (query: string): Promise<QueryResponse<Access>> =>
            this.sendQuery<QueryResponse<Access>>(query),
        getAcceses: async (query: string): Promise<QueryResponse<Array<Access>>> =>
            this.sendQuery<QueryResponse<Array<Access>>>(query),
        getAccessDefinition: async (query: string): Promise<QueryResponse<AccessDefinition>> =>
            this.sendQuery<QueryResponse<AccessDefinition>>(query),
        getAccessDefinitions: async (query: string): Promise<QueryResponse<AccessDefinition>> =>
            this.sendQuery<QueryResponse<AccessDefinition>>(query),
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
        getOrder: async (query: string): Promise<QueryResponse<Order>> =>
            this.sendQuery<QueryResponse<Order>>(query),
        getOrders: async (query: string): Promise<QueryResponse<Array<Order>>> =>
            this.sendQuery<QueryResponse<Array<Order>>>(query),
    };

    public readonly payment = {
        addAdyenClientSettings: async (data: AddAdyenClientSettingsArguments): Promise<AddAdyenClientSettingsResponse> =>
            this.sendCommand<AddAdyenClientSettingsResponse>('AddAdyenClientSettings', data),
        editAdyenClientSettings: async (data: EditAdyenClientSettingsArguments): Promise<EditAdyenClientSettingsResponse> =>
            this.sendCommand<EditAdyenClientSettingsResponse>('EditAdyenClientSettings', data),
        createCashPayment: async (data: CreateCashPaymentArguments): Promise<CreateCashPaymentResponse> =>
            this.sendCommand<CreateCashPaymentResponse>('CreateCashPayment', data),
        createAdyenPaymentSession: async (data: CreateAdyenPaymentSessionArguments): Promise<CreateAdyenPaymentSessionResponse> =>
            this.sendCommand<CreateAdyenPaymentSessionResponse>('CreateAdyenPaymentSession', data),
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

}


