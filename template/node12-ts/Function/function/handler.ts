export default async (event:any, context:any) => {
  ///{event} contains the request parameters like body, headers, params.
  ///{context} contains the methods to handle the response.
 const result = "Fonos function example"

  return context
    .status(200)
    .succeed(result)
}