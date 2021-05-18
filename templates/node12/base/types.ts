export interface Request{
    body:string|object;
    headers:object;
    method: string;
    query: object;
    path:string;
}