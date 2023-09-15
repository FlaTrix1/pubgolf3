<script setup>
import { db } from "@/firebase"
import { ref, onValue } from "firebase/database"
import { computed, reactive } from "vue"
import { useRouter } from "vue-router"
import AddButton from "@/components/AddButton.vue"

const router = useRouter()

// [{name: "John", score: 100}, {name: "Jane", score: 200}]
const scoreboard = reactive({})

// data: { beerlin: { John: { points: 4, penalty: 5 }, Jane: { points: 6, penalty: 0} } }
const setScoreboard = (data) => {
	for (const prop of Object.getOwnPropertyNames(scoreboard)) {
		delete scoreboard[prop]
	}

	for (const [pub, entries] of Object.entries(data)) {
		if (!entries) continue

		for (const [name, { points, penalty }] of Object.entries(entries)) {
			scoreboard[name] = points - penalty + (scoreboard[name] || 0)
		}
	}
}

const sortedScoreboard = computed(() => {
	return Object.entries(scoreboard)
		.sort((a, b) => b[1] - a[1])
		.map(([name, score], index) => ({ name, score, position: index + 1 }))
})

const rootDb = ref(db, "/")
onValue(rootDb, (snapshot) => {
	const data = snapshot.val()

	setScoreboard(data || {})
})
</script>

<template>
	<main>
		<div class="relative overflow-x-auto">
			<table class="w-full text-sm text-left text-gray-500">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3">Position</th>
						<th scope="col" class="px-6 py-3">Name</th>
						<th scope="col" class="px-6 py-3">Score</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b" v-for="score in sortedScoreboard">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							{{ score.position }}
						</th>
						<td class="px-6 py-4">{{ score.name }}</td>
						<td class="px-6 py-4">{{ score.score }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</main>

	<div
		class="fixed z-10 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2"
	>
		<div class="grid h-full max-w-lg grid-cols-3 mx-auto">
			<button
				data-tooltip-target="tooltip-home"
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 group"
			>
				<svg
					class="w-5 h-5 mb-1 text-blue-600"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
					/>
				</svg>
			</button>

			<AddButton />

			<button
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 group"
				@click="router.push('/scorecard')"
			>
				<svg
					class="w-5 h-5 mb-1 text-gray-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
					/>
				</svg>
			</button>
			<div
				id="tooltip-profile"
				role="tooltip"
				class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
			>
				Profile
			</div>
		</div>
	</div>
</template>
