<script setup>
import Badge from '@/components/Badge.vue'
import Button from '@/components/Button.vue'
import ButtonHover from '@/components/ButtonHover.vue'
import { ref, onMounted } from 'vue'

const projects = ref([])
const activeTab = ref('Technical')
const button = ref(['Technical', 'Design', 'All project'])

const filterProject = () => {
  if (!projects.value || !projects.value.technical) return []

  if (activeTab.value === 'All project') {
    return [...projects.value.technical, ...projects.value.design]
  }

  const category = activeTab.value.toLowerCase()
  return projects.value[category] || []
}

onMounted(async () => {
  const response = await fetch('data/project.json')
  const data = await response.json()
  projects.value = data.projects
})
</script>

<template>
  <div class="md:px-18">
    <div class="my-30 mx-auto container min-h-screen px-5">
      <div>
        <h1 class="font-bold text-4xl text-sky-800" data-aos="fade-right">Projects</h1>
        <p class="mt-5 font-semibold" data-aos="fade-right">
          Here are several projects I’ve built across different fields—ranging from web development
          design, and more. Each project reflects my skills, creativity, and dedication to solving
          real-world problems.
        </p>
      </div>

      <div class="flex gap-2 mt-4">
        <ButtonHover
          v-for="(item, index) in button"
          :key="index"
          :text="item"
          :class="{ 'bg-sky-800 text-white': activeTab === item }"
          @click="activeTab = item"
        />
      </div>

      <div class="mt-5">
        <div
          data-aos="fade-up"
          class="flex flex-col md:flex-row border border-gray-400 mb-5 rounded-md"
          v-for="(item, index) in filterProject()"
          :key="index"
        >
          <div class="md:w-1/4 w-full  bg-gray-200 p-5">
            <div class="flex">
              <p class="font-semibold text-2xl">{{ item.type }}</p>
            </div>
            <h1 class="font-medium">{{ item.title }}</h1>
            <div class="flex gap-1">
              <i class="ri-calendar-line text-sky-800"></i>
              <p>{{ item.duration }}</p>
            </div>
            <div class="flex gap-1 flex-wrap mt-2">
              <Badge v-for="(item, index) in item.techStack" :key="index" :text="item" />
            </div>
          </div>
          <div class="md:w-3/4 w-full p-5">
            <p class="text-black mb-2 text-xl font-semibold">
              {{ item.description }}
            </p>
            <p class="text-gray-800 font-bold text-lg">Key Feature:</p>
            <ul class="list-outside list-disc ml-5">
              <li v-for="(item, index) in item.keyFeatures" :key="index">{{ item }}</li>
            </ul>
            <a
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 inline-flex font-semibold text-black hover:underline transition hover:cursor-pointer hover:text-sky-800"
            >
              View project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
