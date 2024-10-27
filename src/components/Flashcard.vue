
<template>
  <div class="flashcard">
    <p>{{ flashcard.question }}</p>
    <button @click="openModal">Show Answer</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ flashcard: { question: string; answer: string }; 
	}>();
</script>

<style scoped>
.flashcard {
  margin: 10px 0;
}

p{
  color: black;
}

</style>
