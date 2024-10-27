<!-- App.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFlashcardStore } from '@/stores/useFlashcardStore';
import ModeSelector from './components/ModeSelector.vue';
import Flashcard from './components/Flashcard.vue';
import FlashcardModal from './components/FlashcardModal.vue';

const store = useFlashcardStore();
const mode = computed(() => store.mode); // Use computed to make it reactive. Renders study mode if start studying button was clicked.
const flashcards = store.flashcards;

const showModal = ref(false);  
const currentFlashcard = ref(null); 

function addNewFlashcard(card: { question: string; answer: string }) {
  store.addFlashcard(card);
}

function startStudying() {
  store.setMode('study');
}

function openModal(flashcard: { question: string; answer: string }) {
  currentFlashcard.value = flashcard;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  currentFlashcard.value = null;
}
</script>

<template>
  <div id="app">
      <ModeSelector
      v-if="mode === 'initialize'"
      :flashcards="flashcards"
      @addFlashcard="addNewFlashcard"
      @switchToStudy="startStudying"
    />
    <div v-else>
      <h2>Studying Mode</h2>
      <div v-for="(card, index) in flashcards" :key="index" @click="openModal(card)">
        <Flashcard :flashcard="card" @showAnswer="openModal(card)"/>
      </div>
      <FlashcardModal v-if="showModal" :flashcard="currentFlashcard" @close="closeModal" />
    </div>
  </div>
</template>

<style scoped>
  #app{
    background: #91C8E4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  h2{
    color: black;
  }
</style>
