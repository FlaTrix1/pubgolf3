<script setup>
import PubButton from "@/components/PubButton.vue"
import { ref } from "vue"
import { useGlobalStore } from "../stores/global"
import { useRouter } from "vue-router"

const router = useRouter()
const showDialog = ref(false)

const store = useGlobalStore()
const close = (value) => {
	showDialog.value = false
	store.currentPub = value
	router.push("/pub")
}
</script>
<template>
	<div class="flex items-center justify-center">
		<button
			data-modal-target="popup-modal"
			data-modal-toggle="popup-modal"
			type="button"
			class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none"
			@click="showDialog = true"
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

	<Teleport to="body" v-if="showDialog">
		<div
			class="fixed top-0 left-0 right-0 z-40 bg-slate-100 w-full h-full opacity-60"
		></div>
		<div
			class="fixed top-0 left-0 right-0 z-50 opacity-100 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex"
		>
			<div class="relative w-full max-w-2xl max-h-full">
				<!-- Modal content -->
				<div class="relative bg-white rounded-lg shadow">
					<!-- Modal header -->
					<div class="flex items-start justify-between p-4 border-b rounded-t">
						<h3 class="text-xl font-semibold text-gray-900">Choose pub</h3>
						<button
							type="button"
							class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
							data-modal-hide="staticModal"
							@click="showDialog = false"
						>
							<svg
								class="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
						</button>
					</div>
					<!-- Modal body -->
					<div class="p-6 grid grid-cols-3 gap-3">
						<PubButton
							pub="Beerlin 🍺"
							value="beerlin"
							@clicked="(value) => close(value)"
						/>
						<PubButton
							pub="Kelt ⚔️"
							value="kelt"
							@clicked="(value) => close(value)"
						/>
						<PubButton
							pub="Bašta ❓"
							value="basta"
							@clicked="(value) => close(value)"
						/>
						<PubButton
							pub="Pepo 👦🏼"
							value="pepo"
							@clicked="(value) => close(value)"
						/>
						<PubButton
							pub="Living 🕺🏻"
							value="living"
							@clicked="(value) => close(value)"
						/>
						<PubButton
							pub="Amstel 🍕"
							value="amstel"
							@clicked="(value) => close(value)"
						/>
						<PubButton
							pub="Amsterdam 🌿"
							value="amsterdam"
							@clicked="(value) => close(value)"
						/>
						<PubButton
							pub="Utopia 🤢"
							value="utopia"
							@clicked="(value) => close(value)"
						/>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style lang="scss" scoped></style>
