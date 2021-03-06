import {WebClient} from '../src/WebClient';
import {Logger} from '../src/Logger';
// const WebClient = require("../src/WebClient");
// const Logger = require("../src/Logger");
import 'localstorage-polyfill'



//
async function run() {
    //
    const token = 'some token';
    const logger = new Logger();
    // const client = new WebClient(token, logger, "http://127.0.0.1:8000", "http://127.0.0.1:8000/graph");
    const client = new WebClient({logger, adminApiUrl: 'http://127.0.0.1:8000', graphApiUrl: 'http://127.0.0.1:8000/graph'});
    // const client = new WebClient({logger, adminApiUrl: 'https://t-admin-api.ticketengine.io', graphApiUrl: 'https://t-graph-api.ticketengine.io', authUrl: 'https://t-auth.ticketengine.io'});

    //
    // const r = await client.access.createEventManager({capacityAllocation: CapacityAllocation.static});
    // const r = await client.order.createOrder({});



    try {
        // const r = await client.tag.createTag({name: 'myTag'});
        // const r = await client.access.renameEvent({});
        // const r = await client.user.getAuthToken({
        //     grantType: 'password',
        //     clientId: 'ticket_engine_back_office',
        //     clientSecret: 'fn4ZKSGyv34cwz5DYNXcUqheX63NRWgn',
        //     scope: 'event:write customer:write user:write order:write event_manager:write tag:write sales_chanel:write payment:write',
        //     username: 'admin',
        //     password: 'AdfRvNNYZZbWy2xuU6KWnaNWunELEPh297r4mxWjvQ'
        // });
        // const r = await client.user.createUser({username: 'test', password: 'test', scopes: ['customer:write', 'event_manager:write']});
        // const r = await client.tokens.createCoupon({name: 'test', description: 'lorum ipsum', useLimit: 1});
        const r = await client.sendQuery('query { order(id: "4cb877d6-8f8b-11ea-8aa6-6eca742c7980"){id,status,customer{id,fullName},paymentStatus,paymentUrl,payments{id,currency,amount,status},totalPrice,totalTax,createDate,expiresOn,tokens{id,typeId,token},requiredPayments{currency,amount},lineItems{ ... on AccessLineItem {id,type,status,price,tax,currency,limit,name,accessDefinition{id},capacityLocationPath,requestedConditionPath,accessId,event{id,eventManagerId,name,location,start,end,availableCapacity}} }} }', []);
console.log(r);
    } catch (e) {
console.error(e);
console.error(e.response);
    }


}

run();