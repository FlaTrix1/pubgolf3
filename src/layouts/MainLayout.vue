<template>
    <div class="bg-blue-600 text-center font-header">
        <h1 class="text-6xl p-2">PubGolf</h1>
    </div>
    <RouterView />
    <div
		class="fixed z-10 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2"
	>
		<div class="grid h-full max-w-lg grid-cols-3 mx-auto">
			<button
				data-tooltip-target="tooltip-home"
				type="button"
				class="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 group"
                @click="$router.push('/home')"
			>
				<svg
					class="w-5 h-5 mb-1"
                    :class="router.currentRoute.value.name === 'home' ? 'text-blue-600' : 'text-gray-500'"
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
				@click="$router.push('/scorecard')"
			>
				<svg
					class="w-5 h-5 mb-1 text-gray-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
                    :class="router.currentRoute.value.name === 'scorecard' ? 'text-blue-600' : 'text-gray-500'"
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
<script setup>
import { RouterView } from "vue-router"
import AddButton from "@/components/AddButton.vue"
import { useRouter } from "vue-router"
import { watch } from "vue"
const router = useRouter()
console.log();
</script>