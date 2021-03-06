import FunctionEvent from './functionEvent';
import FunctionContext from './functionContext';
import handler from '../function/index';

export default class HandlerManager {
    static async handler(functionEvent: FunctionEvent, functionContext:FunctionContext){
        return handler(functionEvent, functionContext);
    }
}