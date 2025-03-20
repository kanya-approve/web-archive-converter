export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	  // Create a URL object from the incoming request URL
	  const { searchParams } = new URL(request.url);
	  
	  // Extract the "url" and "to" query parameters
	  const fileUrl = searchParams.get("url");
	  const outputFormat = searchParams.get("to");
	  
	  // For now, simply return the parsed parameters in the response.
	  return new Response(`File URL: ${fileUrl}, Output Format: ${outputFormat}`);
	},
  } satisfies ExportedHandler<Env>;
  