<script setup lang="ts">
import CVSection from './CVSection.vue'
defineProps<{
  sectionTitle?: string
  sectionId?: string
  recordId?: string
  mainTitle: string
  subTitle: string
  subStrings: Array<string>
  paragraphs?: Array<string>
  list?: Array<string>
  link?: { text: string; href: string }
}>()
</script>

<template>
  <CVSection :section-title="sectionTitle" :section-id="sectionId">
    <template #rightSide>
      <div>
        <h3 class="mb-0 text-lg">
          <span v-once v-text="mainTitle"></span>
          <span class="group font-normal">
            / <span v-once v-text="subTitle"></span>
            <a
              v-if="recordId"
              :id="recordId"
              :href="`#${recordId}`"
              class="ml-1 text-sky-600 no-underline opacity-0 group-hover:opacity-100"
              aria-label="Anchor"
              >#</a
            ></span
          >
        </h3>
      </div>
      <p
        v-for="(item, index) in subStrings"
        v-once
        :key="index"
        class="mb-0 mt-0 text-sm leading-4 text-gray-600"
        v-text="item"
      ></p>
      <div v-if="paragraphs">
        <p v-for="(item, index) in paragraphs" v-once :key="index" v-text="item"></p>
      </div>
      <ul v-if="list">
        <li v-for="(item, index) in list" v-once :key="index" v-text="item"></li>
      </ul>
      <p>
        <a v-if="link" v-once :href="link.href" target="_blank" v-text="link.text"></a>
      </p>
    </template>
  </CVSection>
</template>

<style scoped></style>
