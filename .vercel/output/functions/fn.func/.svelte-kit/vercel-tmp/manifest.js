export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/boxicons.min.css","favicon.png","fonts/Roboto-Italic.ttf","fonts/Roboto-Medium.ttf","fonts/Roboto-MediumItalic.ttf","fonts/Roboto-Regular.ttf","fonts/boxicons.ttf","fonts/boxicons.woff","fonts/boxicons.woff2","images/logo.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.d80422ac.js","app":"_app/immutable/entry/app.73050aec.js","imports":["_app/immutable/entry/start.d80422ac.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/singletons.ec46505f.js","_app/immutable/chunks/index.59ccb19b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.73050aec.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.8d709755.js","_app/immutable/chunks/index.eb84c1c6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/algo",
				pattern: /^\/algo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/email",
				pattern: /^\/api\/email\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/email/_server.js'))
			},
			{
				id: "/audit",
				pattern: /^\/audit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/changelog",
				pattern: /^\/changelog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/clientes_paginado",
				pattern: /^\/clientes_paginado\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/clientes",
				pattern: /^\/clientes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/clientes/[clienteID]",
				pattern: /^\/clientes\/([^/]+?)\/?$/,
				params: [{"name":"clienteID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/hotels",
				pattern: /^\/hotels\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/hotels/[hotelID]",
				pattern: /^\/hotels\/([^/]+?)\/?$/,
				params: [{"name":"hotelID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/logout/_server.js'))
			},
			{
				id: "/manifestPDF/[paqueteID]",
				pattern: /^\/manifestPDF\/([^/]+?)\/?$/,
				params: [{"name":"paqueteID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/paquetes",
				pattern: /^\/paquetes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/paquetes/[paqueteID]",
				pattern: /^\/paquetes\/([^/]+?)\/?$/,
				params: [{"name":"paqueteID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/perfil",
				pattern: /^\/perfil\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/reportes",
				pattern: /^\/reportes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/users",
				pattern: /^\/users\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/users/[userID]",
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: [{"name":"userID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/ventas",
				pattern: /^\/ventas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/ventas/[ventasID]",
				pattern: /^\/ventas\/([^/]+?)\/?$/,
				params: [{"name":"ventasID","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
