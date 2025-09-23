<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Project from './Project.vue'
import Button from './Button.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const rawProjects = ref([])

// fetch data
const fetchProjects = async () => {
  const res = await fetch('data/project.json')
  const data = await res.json()

  const keyLang = `projects_${locale.value}`
  rawProjects.value = data[keyLang]
}

watch(locale, () => {
  fetchProjects()
})

onMounted(() => {
  fetchProjects()
})

// convert raw data ke props
const projects = computed(() => {
  const technical = rawProjects.value?.technical || []
  return technical.slice(0,2).map((p) => ({
    title: p.title,
    period: p.duration,
    desc: p.description,
    badges: p.techStack,
    link: p.link,
  }))
})

</script>

<template>
  <section class="my-10 mx-auto container">
    <h1
      class="text-start text-2xl font-bold text-sky-800 uppercase pl-5 sm:p-0"
      data-aos="fade-left"
    >
      {{ t('projects.college')  }}
    </h1>
    <hr class="my-5 text-sky-800 max-w-[90vw] mx-auto" />

    <div class="mt-5">
      <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
        <Project
          v-for="(project, index) in projects"
          :key="index"
          v-bind="project"
          data-aos="fade-up"
        />
      </div>
      <div class="flex justify-center mt-10" data-aos="fade-up">
        <Button :text="t('button.projects')" page="projects" />
      </div>
    </div>
  </section>
</template>
