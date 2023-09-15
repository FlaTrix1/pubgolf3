<script setup>
import TheWelcome from "@/components/TheWelcome.vue"
import { db } from "@/firebase"
import { ref, onValue } from "firebase/database"

const rootDb = ref(db, "/")
onValue(rootDb, (snapshot) => {
	const data = snapshot.val()
	console.log(data)
})
</script>

<template>
	<main>
		<h1>Test</h1>
	</main>
</template>
