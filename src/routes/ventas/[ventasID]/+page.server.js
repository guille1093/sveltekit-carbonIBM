import { readFileSync } from 'fs';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {

    /**
     * Obtiene una venta por su id
     * @param ventaId
     * @returns {Promise<*>}
    */
    
    const getventa = async (/** @type {string} */ ventaId) => {
        try {
            const [ventaRaw, clientesRaw, paquetesRaw] = await Promise.all([
                locals.pb.collection('ventas').getOne(ventaId),
                locals.pb.collection('clientes').getFullList(undefined, {}),
                locals.pb.collection('projects').getFullList(undefined, {})
            ]);

            const venta = structuredClone(ventaRaw);

            const clientes = clientesRaw.reduce((/** @type {{ [x: string]: any; }} */ map, /** @type {{ id: string | number; }} */ cliente) => {
                map[cliente.id] = cliente;
                return map;
            }, {});

            const paquetes = paquetesRaw.reduce((/** @type {{ [x: string]: any; }} */ map, /** @type {{ id: string | number; }} */ paquete) => {
                map[paquete.id] = paquete;
                return map;
            }, {});


            const cliente = clientes[venta.cliente];
            const paquete = paquetes[venta.paquete];



            venta.cliente = {
                dni: cliente.dni,
                nombre: cliente.nombre,
                apellido: cliente.apellido
            };

            venta.paquete = {
                nombre: paquete.nombre,
                precio: paquete.precio,
                regimen: paquete.regimen,
                cant_dias: paquete.cant_dias,
                cant_noches: paquete.cant_noches,
                fechasalida: paquete.fechasalida,
                fecharetorno: paquete.fecharetorno
            };
            console.log('venta', venta);

            return venta;
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    // Ruta de la imagen en el lado del servidor
    const logoPath = 'static/images/logo.png';

    // Lee la imagen como un buffer
    const logoBuffer = readFileSync(logoPath);

    // Convierte el buffer en una cadena base64
    const logoBase64 = logoBuffer.toString('base64');


    return {
        venta: getventa(params.ventasID),
        logo: logoBase64
    };
};