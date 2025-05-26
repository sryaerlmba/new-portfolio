<script setup>
import { onMounted, ref } from 'vue'
import Badge from './Badge.vue'
import Skill from './Skill.vue'

const skills = ref({})

onMounted(async () => {
  const res = await fetch('data/skills.json')
  const data = await res.json()
  skills.value = data
})

console.info(skills)
</script>

<template>
  <section class="bg-gray-100 py-20">
    <div class="md:px-18">
      <div class="container mx-auto">
        <h1
          class="text-center text-2xl font-bold text-sky-800 uppercase pl-5 sm:p-0"
          data-aos="fade-up"
        >
          Skills
        </h1>
        <hr class="my-5 text-sky-800 max-w-[90vw] mx-auto" />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Skill v-for="(value, key) in skills" :key="key" :title="key" :skills="value"  />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
