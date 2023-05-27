import { writable } from "svelte/store";

export const folder = writable({ name: "root", type: "folder", children: [] });
export const isDarkMode = writable(false);
