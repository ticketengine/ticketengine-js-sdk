// import {WebClient} from './WebClient';
// import {Logger} from './Logger';
// import {
//     AddAccessDefinitionArguments,
//     AddCapacityArguments,
//     ConditionOperators,
//     ConditionFieldOperators,
//     ConditionFacts,
//     CapacityAllocation,
//     CapacityLocationAllocation,
//     CapacityType,
//     CreateEventManagerArguments,
//     PlanEventArguments,
//     ReserveAccessArguments
// } from './command/access';


// const token = 'some token';
// const logger = new Logger();
// const client = new WebClient(token, logger, 'http://graphql-query.ticketengine.localhost:8000');
//
//
//
// const eventManager: CreateEventManagerArguments = {
//     capacityAllocation: CapacityAllocation.static
// };
//
// const event: PlanEventArguments = {
//     aggregateId: '',
//     name: 'Moonlight',
//     description: 'Lorum ipsum...',
//     start: new Date('2019-03-06T18:00:00Z'),
//     end: new Date('2019-03-06T19:42:00Z')
// };
//
// const capacity: AddCapacityArguments = {
//     aggregateId: '',
//     capacity: {
//         location: 'Pathe1',
//         children: [
//             {
//                 type: CapacityType.nonRegulated,
//                 location: 'Regulier',
//                 value: 125,
//             },
//             {
//                 type: CapacityType.nonRegulated,
//                 location: 'VIP',
//                 value: 25,
//             }
//         ],
//     }
// };
//
// const accessDefinition: AddAccessDefinitionArguments = {
//     aggregateId: '',
//     eventId: '',
//     name: 'Reguliere toegang',
//     description: 'lorum ipsum...',
//     start: new Date('2019-03-06T18:00:00Z'),
//     end: new Date('2019-03-06T19:42:00Z'),
//     accessConditions: {
//         operator: ConditionOperators.or,
//         conditions: [
//             {
//                 operator: ConditionOperators.and,
//                 conditions: [
//                     {
//                         fact: ConditionFacts.price,
//                         price: 15,
//                         currency: 'EUR',
//                         postponed: new Date('2020-11-01T13:30:00+00:00'),
//                     }
//                 ],
//             },
//             {
//                 operator: ConditionOperators.and,
//                 conditions: [
//                     {
//                         fact: ConditionFacts.itemsInCart,
//                         operator: ConditionFieldOperators.greaterThen,
//                         value: 1
//                     },
//                     {
//                         fact: ConditionFacts.price,
//                         price: 10,
//                         currency: 'EUR',
//                         postponed: new Date('2020-11-01T13:30:00+00:00'),
//                     }
//                 ],
//             }
//         ],
//     },
//     capacityLocations: ['Regulier', 'VIP'],
//     capacityLocationAllocation: CapacityLocationAllocation.priority,
//     tags: [],
//     limit: 1,
//     isTemplate: false
// };
//
// const reserveAccess: ReserveAccessArguments = {
//     aggregateId: '',
//     eventId: '',
//     orderId: '236ebaa4-84fa-481f-8570-909d82cb93fd',
//     accessDefinitionId: ''
// };


// async function run() {
    // console.log('createEventManager');
    // const em = await client.access.createEventManager(eventManager);
    //
    // console.log('planEvent');
    // event.aggregateId = em.eventManagerId;
    // const e = await client.access.planEvent(event);
    //
    // console.log('addCapacity');
    // capacity.aggregateId = em.eventManagerId;
    // await client.access.addCapacity(capacity);
    //
    // console.log('addAccessDefinition');
    // accessDefinition.aggregateId = em.eventManagerId;
    // accessDefinition.eventId = e.eventId;
    // const ad = await client.access.addAccessDefinition(accessDefinition);
    //
    // console.log('reserveAccess');
    // reserveAccess.aggregateId = em.eventManagerId;
    // reserveAccess.eventId = e.eventId;
    // reserveAccess.accessDefinitionId = ad.accessDefinitionId;
    // await client.access.reserveAccess(reserveAccess);


    // console.log('query');
    // const event = await client.access.getEvents('query { event(id: "ca5c0ee0-6058-11e9-9d30-0242ac1b0005"){id,eventManagerId,name,description,location,start,end,totalCapacity,availableCapacity,reservedCapacity,grantedCapacity,tags} }');
    // const events = await client.access.getEvents('query { events{id,eventManagerId,name,description,location,start,end,totalCapacity,availableCapacity,reservedCapacity,grantedCapacity,tags} }');
    // const access = await client.access.getAccess('query { access(id: "13b17a2a-5c27-11e9-8122-0242ac1b0008"){id,accessDefinitionId,eventManagerId,eventId,orderId,start,end,conditions,satisfiedConditions,location,useLimit,totalUsed,status,tokens} }');
    // const accesses = await client.access.getAcceses('query { accesses{id,accessDefinitionId,eventManagerId,eventId,orderId,start,end,conditions,satisfiedConditions,location,useLimit,totalUsed,status,tokens} }');
    // const accessDefintion = await client.access.getAccessDefinition('query { accessDefinition(id: "a54fbb5a-605e-11e9-851f-0242ac1b0005"){id,eventManagerId,eventId,name,description,start,end,conditions,capacityLocations,capacityLocationAllocation,tags,useLimit,isTemplate} }');
    // const accessDefintions = await client.access.getAccessDefinitions('query { accessDefinitions{id,eventManagerId,eventId,name,description,start,end,conditions,capacityLocations,capacityLocationAllocation,tags,useLimit,isTemplate} }');
    // const order = await client.order.getOrder('query { order(id: "a85a4480-5c28-11e9-8ccc-0242ac1b0009"){id,salesChannelId,registerId,status} }');
    // const orders = await client.order.getOrder('query { orders{id,salesChannelId,registerId,status} }');
    // console.log();
// }
// run();






export {
    WebClient
} from './WebClient';





