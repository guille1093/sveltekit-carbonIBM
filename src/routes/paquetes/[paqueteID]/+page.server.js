import { redirect } from '@sveltejs/kit';

export const load = ({ locals, params }) => {



    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getProject = async (/** @type {any} */ paqueteID) => {
        try {
            return structuredClone(await locals.pb.collection('projects').getOne(paqueteID));
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    const getVentas = async (/** @type {any} */ paqueteID) => {
        try {
            const ventas = structuredClone(
                await locals.pb
                    .collection('ventas')
                    .getFullList(undefined, { filter: `paquete = "${paqueteID}"` })
            );

            // Crear una función asincrónica para obtener el nombre del pasajero
            const getNombrePasajero = async (/** @type {any} */ pasajero) => {
                const cliente = await locals.pb.collection('clientes').getOne(pasajero);
                return structuredClone(cliente);
            };

            // Mostrar los IDs de los pasajeros y obtener sus nombres
            await Promise.all(
                ventas.map(async (/** @type {{ pasajeros: any[]; }} */ venta) => {
                    await Promise.all(
                        venta.pasajeros.map(async (/** @type {string} */ pasajero, /** @type {string | number} */ index) => {
                            console.log('pasajero: ' + pasajero);
                            venta.pasajeros[index] = await getNombrePasajero(pasajero);
                        })
                    );
                })
            );

            return ventas;
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    return {
        paquetes: getProject(params.paqueteID),
        ventas: getVentas(params.paqueteID)
        // clientes: getClientes(params.paqueteID, pasajerosIDs),
    };
};