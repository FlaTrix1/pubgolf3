<script setup>
import { useGlobalStore } from "../stores/global"

const store = useGlobalStore()

if (store.currentPub === null) {
	router.replace("/home")
}
</script>

<template>
	<h1 class="text-2xl bg-emerald-300 w-full py-3 text-center">Beerlin</h1>
	<div class="flex flex-col gap-y-3 px-8 py-4">
		<button
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Default
		</button>

		<button
			type="button"
			class="bg-emerald-300 text-xl text-center p-6 rounded-lg"
		>
			Shot ++
		</button>
		<button
			type="button"
			class="bg-emerald-300 text-xl text-center p-6 rounded-lg"
		>
			Beer 0.3L ++
		</button>
		<button
			type="button"
			class="bg-emerald-300 text-xl text-center p-6 rounded-lg"
		>
			Beer 0.5L ++
		</button>
		<button
			type="button"
			class="bg-emerald-300 text-xl text-center p-6 rounded-lg"
		>
			Penalty ++
		</button>
	</div>
</template>

<style lang="scss" scoped></style>
