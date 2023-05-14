<script setup lang="ts">
import CV from './components/CV/CV.vue'

const print = () => window.print()
</script>

<template>
  <header>
    <div>
      <button
        v-once
        class="absolute right-1 border-none bg-sky-700 px-3 py-1 text-white print:hidden hover:bg-sky-600"
        @click="print"
      >
        Print
      </button>
    </div>
  </header>

  <main>
    <div class="mx-auto max-w-screen-md container">
      <CV />
    </div>
  </main>
</template>

<style scoped></style>
