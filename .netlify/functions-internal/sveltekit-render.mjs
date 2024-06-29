import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.BIc5_y4q.js","app":"_app/immutable/entry/app.RgJLJ2Up.js","imports":["_app/immutable/entry/start.BIc5_y4q.js","_app/immutable/chunks/entry.0_m6coLK.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/entry/app.RgJLJ2Up.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.BcQWKsSn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
