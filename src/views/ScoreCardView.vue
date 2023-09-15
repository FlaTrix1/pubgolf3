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
})
</script>

<template>
	<main>

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
		<h2 class="ml-2 mb-2 text-lg font-semibold text-gray-900 ">Rules:</h2>
		<ul class="space-y-1 text-gray-500 list-inside w-72 mx-auto">
			<li class="flex items-center">
				<svg class="w-3.5 h-3.5 mr-2 text-red-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
				</svg>
				-2 missing drink
			</li>
			<li class="flex items-center">
				<svg class="w-3.5 h-3.5 mr-2 text-red-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
				</svg>
				-1 pissing
		</li>
		<li class="flex items-center">
			<svg class="w-3.5 h-3.5 mr-2 text-purple-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
			</svg>
			+6 pissing yourself
		</li>
		<li class="flex items-center">
			<svg class="w-3.5 h-3.5 mr-2 text-red-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
			</svg>
			-5 cheating
		</li>
		<li class="flex items-center">
			<svg class="w-3.5 h-3.5 mr-2 text-red-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
			</svg>
			-2 we yeah but sa
		</li>
		<li class="flex items-center">
			<svg class="w-3.5 h-3.5 mr-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
			</svg>
			+3 kissing da homies
		</li>
	</ul>
</div>	
	</main>
</template>
