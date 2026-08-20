<script setup lang="ts">
import { ref } from 'vue'
import CVSection from './CVSection.vue'
import DecoratedSection from './DecoratedSection.vue'
import { CVData } from './CVData'

const { email, workingHistoryMain, workingHistoryOld, educationHistory, yearsOfExperience } = CVData

const isExpanded = ref(false)
</script>

<template>
  <CVSection>
    <template #leftSide>
      <h1 class="mb-1 mt-1 font-sans">
        <p v-once class="mb-1 mt-1 text-2xl text-sky-900">Mykola Grybyk</p>
      </h1>
    </template>
    <template #rightSide>
      <div class="font-serif">
        <div class="my-3">
          <span v-once>Amsterdam, Netherlands</span>
          |
          <a
            v-if="email"
            v-once
            :href="`mailto:${email}`"
            target="_blank"
            class="text-sky-700 no-underline visited:text-sky-700"
            v-text="email"
          />
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mykola-grybyk"
            target="_blank"
            class="text-sky-800 no-underline visited:text-sky-700"
            >linkedin.com/in/mykola-grybyk</a
          >
          |
          <a
            href="https://github.com/mgrybyk"
            target="_blank"
            class="text-sky-800 no-underline visited:text-sky-700"
            >github.com/mgrybyk</a
          >
        </div>
      </div>
    </template>
  </CVSection>
  <CVSection section-title="Summary" section-id="summary">
    <template #rightSide>
      <p>
        <strong>Full Stack Engineer</strong> with {{ yearsOfExperience - 4 }}+ years of web
        development experience.
      </p>
      <p>
        I work mostly with TypeScript, React and Node.js. I started in QA and test automation before
        moving into frontend and full-stack development, and that testing instinct still influences
        how I build software.
      </p>
      <p>
        Currently working on LeapSpace at Elsevier, with a focus on frontend and Node.js middleware
        and regular work across backend services, CI/CD, architecture, and the company design
        system.
      </p>
      <p>Long-time WebdriverIO contributor and member of its Technical Steering Committee.</p>
      <p><strong>Languages</strong>: English, Ukrainian, Russian.</p>
      <p>
        <strong>Tech stack</strong>: TypeScript, React, TanStack Query, Next.js, Node.js,
        Playwright, Storybook, Vite, AWS, Docker, Kubernetes, GitHub Actions
      </p>
    </template>
  </CVSection>
  <DecoratedSection
    v-for="(item, index) in workingHistoryMain"
    v-once
    :key="index"
    :section-certificationid="index === 0 ? 'experience' : undefined"
    :section-title="index === 0 ? 'Experience' : undefined"
    :record-id="`exp-${index}`"
    :main-title="item.mainTitle"
    :sub-title="item.subTitle"
    :sub-strings="item.subStrings"
    :list="item.list"
    :tech-stack="item.techStack"
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
  <DecoratedSection
    v-for="(item, index) in educationHistory"
    v-once
    :key="index"
    :section-id="index === 0 ? 'edu_cert' : undefined"
    :section-title="index === 0 ? 'Education' : undefined"
    :main-title="item.mainTitle"
    :sub-title="item.subTitle"
    :sub-strings="item.subStrings"
    :link="item.link"
  />
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
