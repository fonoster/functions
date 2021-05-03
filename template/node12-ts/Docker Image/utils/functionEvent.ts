import {Request} from './../types';

export default class FunctionEvent {
    body: string|object;
    headers: object;
    method: string;
    query:object;
    path:string;
    constructor(req: Request) {
        this.body = req.body;
        this.headers = req.headers;
        this.method = req.method;
        this.query = req.query;
        this.path = req.path;
    }
}