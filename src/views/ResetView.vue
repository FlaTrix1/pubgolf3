<script setup>
import { get, getDatabase, ref, set, onValue } from "firebase/database"
import { useRouter } from "vue-router"

const router = useRouter()

const db = getDatabase()

const setData = async () => {
	set(ref(db), null)
		.then(() => {
			router.push("/home")
		})
		.catch((error) => {
			error.value = true
		})
}

setData()
</script>
<template>
	<div></div>
</template>
