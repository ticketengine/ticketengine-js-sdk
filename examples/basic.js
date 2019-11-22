import {WebClient} from '../src/WebClient';
import {Logger} from '../src/Logger';
// const WebClient = require("../src/WebClient");
// const Logger = require("../src/Logger");



//
async function run() {
    //
    const token = 'some token';
    const logger = new Logger();
    const client = new WebClient(token, logger, 'http://graphql-query.ticketengine.localhost:8000');

    //
    // const em = await client.access.createEventManager({capacityAllocation: CapacityAllocation.static});
    
    const em = await client.tag.createTag({name: 'myTag'});
    console.log(em);



}

run();