import PocketBase from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	// Conectamos con la base de datos

	//pockethost.io
	// event.locals.pb = new PocketBase('https://gq-pfs.pockethost.io');

	//pockethost.io PROD
	event.locals.pb = new PocketBase('https://pfsdev.pockethost.io/');

	//localhost
	// event.locals.pb = new PocketBase('http://127.0.0.1:8090');

	// Cargamos la cookie de autenticación
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// Si la cookie es válida, la refrescamos y guardamos el usuario en locals
	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = structuredClone(event.locals.pb.authStore.model);
		}
		// Si no es válida, la borramos
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	// y la ruta no es login, redirigimos a login
	if (!event.locals.user && event.url.pathname !== '/login') {
		throw redirect(303, '/login');
	}

	const response = await resolve(event); // Stage 2

	// Guardamos la cookie de autenticación
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true }));
	return response;
};
