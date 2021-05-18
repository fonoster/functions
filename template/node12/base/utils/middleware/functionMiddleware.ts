import express from 'express';
import FunctionContext from '../functionContext';
import FunctionEvent from '../functionEvent';
import HandlerManager from '../handlerManager';
const isArray = (a: object) => {
    return (!!a) && (a.constructor === Array);
};

const isObject = (a: object) => {
    return (!!a) && (a.constructor === Object);
};

export default async (req:express.Request, res:express.Response) => {
    
    const cb = (err: any, functionResult: any) => {
        if (err) {
            return res.status(500)
                .send(err.toString ? err.toString() : err);
        }
        
        if(isArray(functionResult) || isObject(functionResult)) {
            res.set(fnContext.headers())
                .status(fnContext.status() as number).send(JSON.stringify(functionResult));
        } else {
            res.set(fnContext.headers())
                .status(fnContext.status() as number)
                .send(functionResult);
        }
    };

    const fnEvent = new FunctionEvent(req);
    const fnContext = new FunctionContext(cb);

    Promise.resolve(HandlerManager.handler(fnEvent, fnContext))
    .then(res => {
        if(!fnContext.cbCalled) {
            fnContext.succeed(res);
        }
    })
    .catch(e => {
        cb(e, undefined);
    });
};