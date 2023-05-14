<script setup lang="ts">
defineProps<{
  sectionTitle?: string
  sectionId?: string
}>()
</script>

<template>
  <section class="grid grid-cols-[1fr_2fr] break-inside-avoid">
    <div class="pe-4">
      <slot name="leftSide">
        <div class="group">
          <h2 v-if="sectionTitle" v-once :id="sectionId" class="font-sans text-lg">
            {{ sectionTitle }}
            <a
              v-if="sectionId"
              v-once
              :href="`#${sectionId}`"
              class="text-sky-700 no-underline opacity-0 group-hover:opacity-100"
              aria-label="Anchor"
              >#</a
            >
          </h2>
        </div>
      </slot>
    </div>
    <div class="cv-section-container"><slot name="rightSide"></slot></div>
  </section>
</template>

<style scoped>
.cv-section-container {
  border-top: 2px solid black;
}
</style>
