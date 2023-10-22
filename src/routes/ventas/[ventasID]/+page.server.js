
let pagado = 0;

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	/**
	 * Obtiene una venta por su id
	 * @param ventaId
	 * @returns {Promise<*>}
	 */
	const getVenta = async (/** @type {string} */ ventaId) => {
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
	
		return venta;
	};

	const ventaExpanded = structuredClone(
		await locals.pb
			.collection('ventas')
			.getOne(params.ventasID, { expand: 'cliente, pasajeros, pagos, paquete' })
	);

	pagado = ventaExpanded.pagado;

	return {
		venta: getVenta(params.ventasID),
		ventaExpanded
	};
}



// This code creates a new Pago record and updates the Ventas record with the new Pago record ID and the new pagado value.

export const actions = {
	createPago: async ({ request, locals, params }) => {
		const form = await request.formData();
		const data = {
			valor: form.get('valor')
		};

		// Convert data.valor to an integer.
		const NuevoPagoValor = parseInt(data.valor, 10);

		// Convert pagado to an integer.
		const TotalPagado = parseInt(pagado, 10);

		// Add NuevoPagoValor to TotalPagado.
		const NuevoTotalPagado = NuevoPagoValor + TotalPagado;

		// Create a new Pago record.
		const record = await createPago(locals, data);

		// Update the Ventas record with the new Pago record ID and the new pagado value.
		await updateVentas(locals, params, record.id, NuevoTotalPagado);
	}
};


async function createPago(locals, data) {
	// create a new payment
	return await locals.pb.collection('pagos').create(data);
}

async function updateVentas(locals, params, recordID, NuevoTotalPagado) {
	// update the sale
	return await locals.pb.collection('ventas').update(params.ventasID, {
		'pagos+': recordID,
		pagado: NuevoTotalPagado
	});
}
