export default async (event:EventFunction, context:ContextFunction) => {
  ///{event} contains the request parameters like body, headers, params.
  ///{context} contains the methods to handle the response.
 const result = "function example functions"

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
  status(value:number):ContextFunction;
  succeed(value:unknown);
  fail(value:number);
  headers(value?:object):ContextFunction
}
