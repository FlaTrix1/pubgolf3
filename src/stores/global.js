import { defineStore } from "pinia"

export const useGlobalStore = defineStore({
	id: "global",
	state: () => ({
		username: null,
		currentPub: null,
	}),
	getters: {},
	actions: {},
	persist: true,
})
