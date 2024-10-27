
<template>
  <div class="modal">
    <p>Question: {{ flashcard.question }}</p>
    <input v-model="userAnswer" placeholder="Your answer" />
    <button @click="submitAnswer">Submit</button>
    
    <p v-if="showAnswer">Correct Answer: {{ flashcard.answer }}</p>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ flashcard: { question: string; answer: string } }>();

const userAnswer = ref('');
const showAnswer = ref(false);


function submitAnswer() {
  showAnswer.value = true;

}
</script>

<style scoped>
.modal {
  padding: 20px;
  background: #f2f2f2;
  border-radius: 8px;
}

p{
  color: black;
}
</style>
