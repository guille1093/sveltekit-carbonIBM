import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
	console.log('handle', event);

	// Conectamos con la base de datos
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	console.log('pb', event.locals.pb);

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

	// Ejecutamos el resto de hooks y la ruta solicitada
	const response = await resolve(event);

	// Guardamos la cookie de autenticación
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true }));
	return response;
};
