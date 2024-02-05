import transporter from '$lib/service/email';
import { publicidad } from '$lib/service/emailTemplates/publicidad';

export async function sendMail({ cliente, paquete }) {
	console.log('llega a la api de email');

	const htmlParams = {
		cliente: cliente,
		paquete: paquete
	};

	const options = {
		from: 'delvalleturismo@app.com',
		to: cliente.email,
		subject: `Tu proximo viaje a ${paquete.nombre} ya esta aqui 🎉`,
		html: publicidad(htmlParams)
	};

	const info = await transporter.sendMail(options);
	console.log(info.response);
	return new Response(info.response);
}
