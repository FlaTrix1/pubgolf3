<script setup>
import { get, getDatabase, ref, set, onValue } from "firebase/database"
import { onMounted, reactive, ref as vRef } from "vue"
import { useGlobalStore } from "../stores/global"
import { useRouter } from "vue-router"

const store = useGlobalStore()
const router = useRouter()

if (store.currentPub === null) {
	router.replace("/home")
}

const db = getDatabase()

const path = store.currentPub + "/" + store.username
const currentValues = reactive({
	points: 0,
	penalty: 0,
})

const rootDb = ref(db, path)
onValue(rootDb, (snapshot) => {
	const data = snapshot.val()
	if (data) {
		currentValues.points = data.points
		currentValues.penalty = data.penalty
	}
})

const error = vRef(false)

const counters = reactive({
	beerSm: 0,
	beerLg: 0,
	shot: 0,
	penalty: 0,
	points: 0,
})

const setData = async () => {
	set(ref(db, store.currentPub + "/" + store.username), { ...currentValues })
		.then(() => {
			router.push("/home")
		})
		.catch((error) => {
			error.value = true
		})
}

const setScore = async (points, drink) => {
	currentValues.points += points

	// await setData()
}

const setPenalty = async (penalty) => {
	currentValues.penalty += penalty

	// await setData()
}
</script>

<template>
	<h1 class="text-2xl bg-emerald-300 w-full py-3 text-center">
		{{ store.currentPub }}
	</h1>
	<div v-if="error">Error occured</div>
	<div class="flex flex-col gap-y-3 px-8 py-4">
		<button
			@click="() => [setScore(3), counters.shot++]"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Shot ++
		</button>
		<div class="text-md text-center">{{ counters.shot }}</div>
		<button
			@click="() => [setScore(3), counters.beerSm++]"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Beer 0.3L ++
		</button>
		<div class="text-md text-center">{{ counters.beerSm }}</div>
		<button
			@click="() => [setScore(5), counters.beerLg++]"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Beer 0.5L ++
		</button>
		<div class="text-md text-center">{{ counters.beerLg }}</div>
		<button
			@click="() => [setPenalty(1), counters.penalty++]"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Penalty --
		</button>
		<div class="text-md text-center">{{ counters.penalty }}</div>
		<button
			@click="() => [setScore(1), counters.points++]"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Bonus ++
		</button>
		<div class="text-md text-center">{{ counters.points }}</div>
		<button
			@click="() => [setData()]"
			type="button"
			class="bg-blue-500 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Submit
		</button>
	</div>
</template>

<style lang="scss" scoped></style>
