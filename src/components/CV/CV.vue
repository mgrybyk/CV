<script setup lang="ts">
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
  workingHistory,
  educationHistory,
  languages
} = CVData
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
        <p v-once v-text="cityCountry"></p>
        <div>
          <a
            v-if="phone"
            v-once
            :href="`tel:${email}`"
            class="text-sky-800 no-underline"
            v-text="phone"
          ></a>
        </div>
        <div>
          <a
            v-if="email"
            v-once
            :href="`mailto:${email}`"
            class="text-sky-800 no-underline"
            v-text="email"
          ></a>
        </div>
        <div class="my-4">
          <div v-for="(item, index) in resourceLinks" v-once :key="index">
            <a
              :href="item.href"
              class="text-sky-800 no-underline visited:text-sky-700"
              v-text="item.text"
            ></a>
          </div>
        </div>
      </div>
    </template>
  </CVSection>
  <CVSection section-title="Summary" section-id="summary">
    <template #rightSide>
      <p v-for="(item, index) in summary" v-once :key="index" v-text="item"></p>
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
    v-for="(item, index) in workingHistory"
    v-once
    :key="index"
    :section-id="index === 0 ? 'experience' : undefined"
    :section-title="index === 0 ? 'Experience' : undefined"
    :record-id="`exp-${index}`"
    :main-title="item.mainTitle"
    :sub-title="item.subTitle"
    :sub-strings="item.subStrings"
    :paragraphs="item.text"
    :list="item.list"
  />
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

<style scoped></style>
