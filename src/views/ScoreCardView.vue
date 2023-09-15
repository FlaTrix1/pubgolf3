<script setup>
import { db } from "@/firebase"
import { ref as r, onValue } from "firebase/database"
import { reactive } from "vue"
import { useGlobalStore } from "@/stores/global"

const store = useGlobalStore()
const scorecard = reactive(
	{
		beerlin: undefined, 
		kelt: undefined, 
		basta: undefined, 
		pepo: undefined, 
		arcadia: undefined, 
		living: undefined, 
		amstel: undefined, 
		utopia: undefined
	}
)
const setScoreCard = (data) => {
	for (const prop of Object.getOwnPropertyNames(scorecard)) {
		scorecard[prop] = undefined
	}

    for (const [pub, entries] of Object.entries(data)) {
        if (!entries) continue


        for (const [name, { points, penalty }] of Object.entries(entries)) {
      if (name !== store.username) continue 
            scorecard[pub] = {points, penalty}
        }
    }
}

const rootDb = r(db, "/")
onValue(rootDb, (snapshot) => {
	const data = snapshot.val()
	setScoreCard(data)
	console.log(scorecard)
})
</script>

<template>
	<main>
		<h1 class="text-3xl">ScoreCard</h1>

		<div class="relative overflow-x-auto">
			<table class="w-full text-sm text-left text-gray-500">
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50"
				>
					<tr>
						<th scope="col" class="px-6 py-3">aBar</th>
						<th scope="col" class="px-6 py-3">Score</th>
						<th scope="col" class="px-6 py-3">Penalties</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Beerlin
						</th>
						<td class="px-6 py-4">{{ scorecard.beerlin?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.beerlin?.penalty || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Kelt
						</th>
						<td class="px-6 py-4">{{ scorecard.kelt?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.kelt?.penalty || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Basta
						</th>
						<td class="px-6 py-4">{{ scorecard.basta?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.basta?.penalty || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Pepo
						</th>
						<td class="px-6 py-4">{{ scorecard.pepo?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.pepo?.penalty || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Arcadia
						</th>
						<td class="px-6 py-4">{{ scorecard.arcadia?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.arcadia?.penalty || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Living
						</th>
						<td class="px-6 py-4">{{ scorecard.living?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.living?.penalty || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Amstel
						</th>
						<td class="px-6 py-4">{{ scorecard.amstel?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.amstel?.penalty || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Utopia
						</th>
						<td class="px-6 py-4">{{ scorecard.utopia?.points || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.utopia?.penalty || 0 }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			<h2>Rules</h2>
			<ul>aaaa</ul>
			<ul>aaaa</ul>
			<ul>aaaa</ul>
		</div>
	</main>
</template>
