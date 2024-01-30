import PocketBase from 'pocketbase';

export const url = 'http://127.0.0.1:8090';
//export const url = 'https://pfsdev.pockethost.io/';
export let pb = new PocketBase(url);