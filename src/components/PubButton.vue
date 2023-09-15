<script setup>
defineProps(["pub", "value"])
</script>

<template>
	<button
		type="button"
		class="text-gray-500 h-24 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
		@click="() => $emit('clicked', value)"
	>
		{{ pub }}
	</button>
</template>
