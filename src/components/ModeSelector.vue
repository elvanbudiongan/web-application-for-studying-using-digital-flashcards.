<!-- src/components/ModeSelector.vue -->
<template>
  <div>
    <h2 v-if="mode === 'initialize'">Initializing Mode</h2>
    <form v-if="mode === 'initialize'" @submit.prevent="addNewFlashcard">
      <div>
        <label>Input Question</label>
        <input v-model="newCard.question" required />
      </div>

      <div>
        <label>Input Answer</label>
        <input v-model="newCard.answer" required />
      </div>
      
      <button type="submit">Add Flashcard</button>
    </form>
    <button @click="switchToStudy" :disabled="flashcards.length === 0">
      Start Studying
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFlashcardStore } from '@/stores/useFlashcardStore';

const store = useFlashcardStore();
const newCard = ref({ question: '', answer: '' });

function addNewFlashcard() {
  store.addFlashcard({ ...newCard.value });
  newCard.value.question = '';
  newCard.value.answer = '';
}

function switchToStudy() {
  console.log("Switching to study mode"); // console.log to confirm if switch work
  store.setMode('study');
}

const mode = store.mode;
const flashcards = store.flashcards;
</script>

<style scoped>
  h2{
    color:black;
  }
  label{
    color: black;
  }
</style>
