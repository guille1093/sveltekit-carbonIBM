/*
    Esta funcion se encarga de obtener la lista de pasajeros de un paquete incluyendo el titular y los pasajeros
*/

export async function getPasajeros(locals) {
    try {
        const getClientes = async () => {
            // @ts-ignore
            return structuredClone(await locals.pb.collection('clientes').getFullList(undefined, {}));
        };

        const [clientes] = await Promise.all([getClientes()]);
        
        console.log('clientes cargados' + clientes);

        return {
            clientes
        };

    } catch (err) {
        console.log('Error: ', err);
    }
}