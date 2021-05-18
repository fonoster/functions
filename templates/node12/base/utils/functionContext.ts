export default class FunctionContext {
    cb: Function;
    headerValues: object;
    cbCalled: number;
    value: number;
    constructor(cb: Function) {
        this.value = 200;
        this.cb = cb;
        this.headerValues = {};
        this.cbCalled = 0;
    }

    status(value?: number) {
        if(!value) {
            return this.value;
        }

        this.value = value;
        return this;
    }

    headers(value?: object) {
        if(!value) {
            return this.headerValues;
        }

        this.headerValues = value;
        return this;    
    }

    succeed(value:number) {
        let err;
        this.cbCalled++;
        this.cb(err, value);
    }

    fail(value:number) {
        let message;
        this.cbCalled++;
        this.cb(value, message);
    }
}