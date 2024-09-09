//app.get , headers , body

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return new Response('hello harshit');
// 	},
// } satisfies ExportedHandler<Env>;

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		
	
	
			return Response.json({
				message: "you sent a get request"
		
		
		})
	}
}satisfies ExportedHandler<Env>;