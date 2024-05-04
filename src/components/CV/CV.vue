<script setup lang="ts">
import { ref } from 'vue'
import CVSection from './CVSection.vue'
import DecoratedSection from './DecoratedSection.vue'
import { CVData } from './CVData'

const {
  fullName,
  jobTitle,
  cityCountry,
  phone,
  email,
  summary,
  resourceLinks,
  skills,
  workingHistoryMain,
  workingHistoryOld,
  educationHistory,
  languages,
  yearsOfExperience
} = CVData

const isExpanded = ref(false)
</script>

<template>
  <CVSection>
    <template #leftSide>
      <h1 class="mb-1 mt-1 font-sans">
        <p v-once class="mb-1 mt-1 text-2xl" v-text="fullName"></p>
        <p v-once class="mb-1 mt-1 text-lg text-sky-900" v-text="jobTitle"></p>
      </h1>
    </template>
    <template #rightSide>
      <div class="font-serif">
        <p v-once class="mb-1" v-text="cityCountry"></p>
        <div class="mb-3">
          <a
            v-if="phone"
            v-once
            :href="`tel:${email}`"
            target="_blank"
            class="text-sky-800 no-underline"
            v-text="phone"
          ></a>
        </div>
        <div>
          <a
            v-if="email"
            v-once
            :href="`mailto:${email}`"
            target="_blank"
            class="text-sky-800 no-underline"
            v-text="email"
          ></a>
        </div>

        <div class="my-3">
          <div v-for="(item, index) in resourceLinks" v-once :key="index" class="mt-1">
            <a
              :href="item.href"
              target="_blank"
              class="text-sky-800 no-underline visited:text-sky-700"
              :class="{ 'print:hidden': item.hidePrintMode }"
              v-text="item.text"
            ></a>
          </div>
        </div>
        <p class="mt-1">Years of experience: {{ yearsOfExperience }}</p>
      </div>
    </template>
  </CVSection>
  <CVSection section-title="Summary" section-id="summary">
    <template #rightSide>
      <p v-for="(item, index) in summary" v-once :key="index" v-text="item"></p>
      <p>
        I enjoy contributing to open source projects and have made significant contributions to the
        <a href="https://webdriver.io/" target="_blank">WebdriverIO</a> project.
      </p>
    </template>
  </CVSection>
  <DecoratedSection
    v-for="(item, index) in workingHistoryMain"
    v-once
    :key="index"
    :section-id="index === 0 ? 'experience' : undefined"
    :section-title="index === 0 ? 'Experience' : undefined"
    :record-id="`exp-${index}`"
    :main-title="item.mainTitle"
    :sub-title="item.subTitle"
    :sub-strings="item.subStrings"
    :list="item.list"
  />
  <div class="expand-section" :class="{ expanded: isExpanded }">
    <DecoratedSection
      v-for="(item, index) in workingHistoryOld"
      v-once
      :key="index"
      :record-id="`exp-2${index}`"
      :main-title="item.mainTitle"
      :sub-title="item.subTitle"
      :sub-strings="item.subStrings"
      :paragraphs="item.text"
    />
  </div>
  <CVSection class="print:hidden">
    <template #rightSide>
      <p>
        <button
          class="cursor-pointer border-none bg-transparent text-sky-700"
          aria-label="Toggle show more/less experience records"
          @click="isExpanded = !isExpanded"
        >
          Show {{ isExpanded === true ? 'Less' : 'More...' }}
        </button>
      </p>
    </template>
  </CVSection>
  <CVSection section-title="Skills" section-id="skills">
    <template #rightSide>
      <ul>
        <li v-for="(item, index) in skills" v-once :key="index" v-text="item"></li>
      </ul>
    </template>
  </CVSection>
  <DecoratedSection
    v-for="(item, index) in educationHistory"
    v-once
    :key="index"
    :section-id="index === 0 ? 'edu_cert' : undefined"
    :section-title="index === 0 ? 'Education / Certification' : undefined"
    :main-title="item.mainTitle"
    :sub-title="item.subTitle"
    :sub-strings="item.subStrings"
    :link="item.link"
  />
  <CVSection section-title="Languages" section-id="languages">
    <template #rightSide>
      <p v-once v-text="languages"></p>
    </template>
  </CVSection>
</template>

<style scoped>
.expand-section {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.expand-section.expanded {
  max-height: inherit;
}
</style>
