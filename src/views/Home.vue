<script setup>
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Portfolio from '@/components/Portfolio.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'

import { ref } from 'vue'

const jumbotron = {
  role: 'Web Developer | Graphic Designer',
  desc: 'An enthusiastic undergraduate student majoring in System and Information Technology with a strong foundation in web development and design.',
}
</script>

<template>
  <Jumbotron :role="jumbotron.role" :desc="jumbotron.desc" />
  <Portfolio />
  <div class="md:px-18">
    <Experience />
    <Education />
    <Projects />
  </div>
  <Skills />
</template>

<style scoped></style>
