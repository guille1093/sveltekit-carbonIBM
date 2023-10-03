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

			const clientes = clientesRaw.reduce(
				(
					/** @type {{ [x: string]: any; }} */ map,
					/** @type {{ id: string | number; }} */ cliente
				) => {
					map[cliente.id] = cliente;
					return map;
				},
				{}
			);

			const paquetes = paquetesRaw.reduce(
				(
					/** @type {{ [x: string]: any; }} */ map,
					/** @type {{ id: string | number; }} */ paquete
				) => {
					map[paquete.id] = paquete;
					return map;
				},
				{}
			);

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
			//console.log('venta', venta);

			return venta;
		} catch (err) {
			console.log('Error: ', err);
		}
	};

	const ventaExpanded = structuredClone(
		await locals.pb
			.collection('ventas')
			.getOne(params.ventasID, { expand: 'cliente, pasajeros, pagos, paquete' })
	);
	console.log('ventaExpanded: ', ventaExpanded);
	return {
		venta: getventa(params.ventasID),
		ventaExpanded
	};
}

export const actions = {
	createPago: async ({ request, locals, params }) => {
		const form = await request.formData();
		console.log('form: ', form);
		const data = {
			valor: form.get('valor')
		};

		const record = await locals.pb.collection('pagos').create(data);
		console.log('pago: ', record.id);
		await locals.pb.collection('ventas').update(params.ventasID, {
			// append single tag
			'pagos+': record.id
		});
	}
};
