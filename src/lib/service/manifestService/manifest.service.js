import transporter from '$lib/service/email';
import { manifestMail } from '$lib/service/manifestService/manifest.email';

export async function sendManifestEmail({ paquete }) {
	
	const htmlParams = {
		paquete: paquete
	};
    
	const options = {
		from: 'excursia@app.com',
		to: 'guillermo@turismo.com',
		subject: `Manifiesto disponible ${paquete.nombre}`,
		html: manifestMail(htmlParams)
	};

	const info = await transporter.sendMail(options);
	console.log(info.response);
	return new Response(info.response);
}
