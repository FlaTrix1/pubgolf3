import { defineStore } from "pinia"

export const useGlobalStore = defineStore({
	id: "global",
	state: () => ({
		username: null,
	}),
	getters: {
		doubleCount: (state) => state.counter * 2,
	},
	actions: {
		increment() {
			this.counter++
		},
	},
	persist: true,
})
