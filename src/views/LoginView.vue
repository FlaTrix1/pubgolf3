<script setup>
import { ref } from "vue"
import { useGlobalStore } from "@/stores/global"
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref("")
const onSubmit = () => {
	const store = useGlobalStore()
	store.username = username.value
	router.replace("/home")
}
</script>

<template>
	<div>
		<label
			for="first_name"
			class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Set your name</label
		>
		<input
			v-model="username"
			@keydown.enter="onSubmit"
			type="text"
			id="first_name"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
			placeholder="John"
			required
		/>
		<button
			@click="onSubmit"
			class="bg-blue-500 hover:bg-blue-600 text-white font-medium w-full text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none px-4 py-2.5 mt-4"
		>
			Submit
		</button>
	</div>
</template>
