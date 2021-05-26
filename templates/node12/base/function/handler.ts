export default async (event:EventFunction, context:ContextFunction) => {
  ///{event} contains the request parameters like body, headers, params.
  ///{context} contains the methods to handle the response.
 const result = "Fonos function examples"

  return context
    .status(200)
    .succeed(result)
}

interface EventFunction {
  body:string|object;
  headers:object;
  method: string;
  query: object;
  path:string;
}

interface ContextFunction {
  status(value:number):any;
  succeed(value:unknown):void;
  fail(value:number):void;
  headers(value?:object):any;
}
