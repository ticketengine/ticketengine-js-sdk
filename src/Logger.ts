import {LoggerInterface} from "./LoggerInterface";


export class Logger implements LoggerInterface {

    debug(msg: string): void {
        console.log(msg);
    }

    info(msg: string): void {
        console.log(msg);
    }

    warn(msg: string): void {
        console.log(msg);
    }

    error(msg: string): void {
        console.error(msg);
    }

}