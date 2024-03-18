import { writable } from 'svelte/store';

export const notificationStore = writable({ title: '', subtitle: '', open: false });
