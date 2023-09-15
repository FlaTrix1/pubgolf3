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

const setData = async () => {
	set(ref(db, store.currentPub + "/" + store.username), { ...currentValues })
		.then(() => {
			router.push("/home")
		})
		.catch((error) => {
			error.value = true
		})
}

const setScore = async (points) => {
	currentValues.points += points

	await setData()
}

const setPenalty = async (penalty) => {
	currentValues.penalty += penalty

	await setData()
}
</script>

<template>
	<h1 class="text-2xl bg-emerald-300 w-full py-3 text-center">
		{{ store.currentPub }}
	</h1>
	<div v-if="error">Error occured</div>
	<div class="flex flex-col gap-y-3 px-8 py-4">
		<button
			@click="() => setScore(3)"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Shot ++
		</button>
		<button
			@click="() => setScore(3)"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Beer 0.3L ++
		</button>
		<button
			@click="() => setScore(5)"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Beer 0.5L ++
		</button>
		<button
			@click="() => setPenalty(1)"
			type="button"
			class="bg-emerald-300 hover:bg-emerald-400 p-6 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium focus:outline-none"
		>
			Penalty ++
		</button>
	</div>
</template>

<style lang="scss" scoped></style>
