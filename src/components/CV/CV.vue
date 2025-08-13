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
        <p
          v-once
          class="mb-1 mt-1 text-2xl text-sky-900"
        >
          Mykola Grybyk
        </p>
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
          >linkedin.com/in/mykola-grybyk</a>
          |
          <a
            href="https://github.com/mgrybyk"
            target="_blank"
            class="text-sky-800 no-underline visited:text-sky-700"
          >github.com/mgrybyk</a>
        </div>
      </div>
    </template>
  </CVSection>
  <CVSection
    section-title="Summary"
    section-id="summary"
  >
    <template #rightSide>
      <p>
        <strong>Full Stack Engineer</strong> with {{ yearsOfExperience }}+ years of web development
        experience, specializing in modern React applications and developer tooling.
      </p>
      <p>
        I build scalable frontend applications and contribute actively to open source projects,
        including serving on the WebdriverIO technical committee as one of the
        <a
          href="https://github.com/webdriverio/webdriverio/graphs/contributors"
          target="_blank"
          class="text-sky-800 no-underline visited:text-sky-700"
        >top contributors</a>. My background spans both application development and comprehensive testing automation.
      </p>
      <p>
        Open to challenging frontend or full-stack opportunities with significant technical
        ownership. Remote work strongly preferred.
      </p>
      <p><strong>Visa status</strong>: Dutch Highly Skilled Migrant visa valid until 2028.</p>
      <p><strong>Languages</strong>: English, Ukrainian, Russian, Spanish (A2).</p>
      <p>
        <strong>Tech stack (latest)</strong>: TypeScript, React, TanStack Query, RTK Query, Next.js, Node.js,
        Storybook, Vite, Webpack, Tailwind CSS, Playwright, WebdriverIO, Jest, Vitest, AWS,
        Cloudflare, Docker, Kubernetes, GitHub Actions, ESLint, Prettier.
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
  />
  <div
    class="expand-section"
    :class="{ expanded: isExpanded }"
  >
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
