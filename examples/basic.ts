import {WebClient} from '../src/WebClient';
import {Logger} from '../src/Logger';
// const WebClient = require("../src/WebClient");
// const Logger = require("../src/Logger");



//
async function run() {
    //
    const token = 'some token';
    const logger = new Logger();
    const client = new WebClient(token, logger);

    //
    // const r = await client.access.createEventManager({capacityAllocation: CapacityAllocation.static});
    


    try {
        // const r = await client.tag.createTag({name: 'myTag'});
        const r = await client.access.renameEvent({});
console.log(r);
    } catch (e) {
// console.error(e);
console.error(e.response.data.data.message);
    }


}

run();