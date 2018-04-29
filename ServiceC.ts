import { Injectable, ReflectiveInjector } from 'injection-js';
import { ServiceA } from './ServiceA';
@Injectable()
export class ServiceC{
    constructor(){
        const injector = ReflectiveInjector.resolveAndCreate([ServiceA]);
        let serviceA = injector.get(ServiceA);
    }
}