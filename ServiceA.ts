import { Injectable } from 'injection-js';
@Injectable()
export class ServiceA{
    constructor(){
        console.log("service A constructed");
    }
}