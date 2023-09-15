<script setup>
import { db } from "@/firebase"
import { ref, onValue } from "firebase/database"
import { computed, reactive } from "vue"

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
			console.log(points, penalty)
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
	setScoreboard(data)
})
</script>

<template>
	<main>
		<div class="relative overflow-x-auto">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="px-6 py-3">Position</th>
						<th scope="col" class="px-6 py-3">Name</th>
						<th scope="col" class="px-6 py-3">Score</th>
					</tr>
				</thead>
				<tbody>
					<tr
						class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						v-for="score in sortedScoreboard"
					>
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
</template>
