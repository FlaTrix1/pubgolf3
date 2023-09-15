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
						<td class="px-6 py-4">{{ scorecard.basta?.pepo || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.basta?.pepo || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Arcadia
						</th>
						<td class="px-6 py-4">{{ scorecard.basta?.arcadia || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.basta?.arcadia || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Living
						</th>
						<td class="px-6 py-4">{{ scorecard.basta?.living || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.basta?.living || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Amstel
						</th>
						<td class="px-6 py-4">{{ scorecard.basta?.amstel || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.basta?.amstel || 0 }}</td>
					</tr>
					<tr class="bg-white border-b  "
                    >
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
						>
							Utopia
						</th>
						<td class="px-6 py-4">{{ scorecard.basta?.utopia || 0 }}</td>
						<td class="px-6 py-4">{{ scorecard.basta?.utopia || 0 }}</td>
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
	<div
		class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2"
	>
		<div class="grid h-full max-w-lg grid-cols-3 mx-auto">
			<button
				data-tooltip-target="tooltip-home"
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 group"
				@click="$router.push('/home')"
			>
				<svg
					class="w-5 h-5 mb-1 text-gray-500 "
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

			<div class="flex items-center justify-center">
				<button
					type="button"
					class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none"
				>
					<svg
						class="w-4 h-4 text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 18"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 1v16M1 9h16"
						/>
					</svg>
				</button>
			</div>

			<button
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50  group"
			>
				<svg
					class="w-5 h-5 mb-1 text-blue-600"
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
				class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
			>
				Profile
			</div>
		</div>
	</div>
</template>
