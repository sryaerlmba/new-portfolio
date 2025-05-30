<script setup>
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Portfolio from '@/components/Portfolio.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'

import { onMounted, ref } from 'vue'

const profile = ref([])
onMounted(async ()=>{
  const response = await fetch("data/profile.json")
  profile.value = await response.json()
  console.log(profile.value, "ini profile")
})
</script>

<template>
  <Jumbotron v-bind="profile" />
  <Portfolio />
  <div class="md:px-18">
    <Experience />
    <Education />
    <Projects />
  </div>
  <Skills />
</template>

<style scoped></style>

