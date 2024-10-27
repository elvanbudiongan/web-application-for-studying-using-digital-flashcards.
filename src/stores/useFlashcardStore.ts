
import { defineStore } from 'pinia';

export interface Flashcard {
  question: string;
  answer: string;
}

export const useFlashcardStore = defineStore('flashcard', {
  state: () => ({
    mode: 'initialize' as 'initialize' | 'study',
    flashcards: [] as Flashcard[],
  }),
  actions: {
    addFlashcard(flashcard: Flashcard) {
      this.flashcards.push(flashcard);
    },
    setMode(newMode: 'initialize' | 'study') {
      console.log('Mode is changing to:', newMode);
      this.mode = newMode;
    },
  },
});
