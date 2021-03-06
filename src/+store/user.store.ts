import type { User } from '$types/user';
import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>('dark');
export const prefferedLanguage = writable<'en' | 'fr'>('en');
export const user = writable<User>(undefined);
