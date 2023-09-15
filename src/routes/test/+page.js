import { getPasajeros } from '$lib/servicios/pbservice';

/** @type {import('./$types').PageLoad} */
export async function load(locals) {
    console.log('locals', locals);
    //console.log('getPasajeros', getPasajeros(locals));
    return {

    };
};