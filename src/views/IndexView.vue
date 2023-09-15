<script setup>
import { useRouter } from "vue-router"
import { onMounted } from "vue"
import { useGlobalStore } from "@/stores/global"

const router = useRouter()
const store = useGlobalStore()
onMounted(() => {
	if (store.username === null) {
		router.replace("/login")
	} else {
		router.replace("/home")
	}
})
</script>
<template>
	<div></div>
</template>
