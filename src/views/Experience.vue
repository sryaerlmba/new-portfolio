<script setup>
import Badge from '@/components/Badge.vue'
import { ref, onMounted, watchEffect } from 'vue'
import Button from '@/components/Button.vue'
import ExperienceDetail from '@/components/ExperienceDetail.vue'

const dataExperience = ref([])

// mapping
onMounted(async () => {
  const res = await fetch('data/experience.json')
  const data = await res.json()

  const work = data.workExperience

  const orga = data.organizationExperience.map((item) => ({
    ...item,
    company: item.organization,
  }))

  dataExperience.value = [...work, ...orga]

  console.log(dataExperience.value)
})

</script>

<template>
  <div class="my-10 container mx-auto px-5 min-h-screen">
    <div>
      <h1 class="font-bold text-4xl text-sky-800" data-aos="fade-right">Experience</h1>
      <p class="mt-5 font-semibold" data-aos="fade-right">
        My professional journey includes roles in web development, graphic design, and media
        management. Each position has helped me develop a diverse skill set and adaptability across
        different projects and environments.
      </p>
    </div>

    <div class="mt-5 flex flex-col gap-5" data-aos="fade-up">
      <ExperienceDetail v-for="(item, index) in dataExperience" :key="index" v-bind="item" />
    </div>

    <!-- contact -->
    <div class="my-5 border p-5 border-gray-400 flex flex-col">
      <h1 class="font-semibold text-xl pb-3">Additional Information</h1>
      <p>
        I'm always eager to take on new challenges and expand my professional experience. If you'd
        like to discuss potential collaboration or have any questions about my work experience,
        please don't hesitate to reach out. Contact Me
      </p>
      <Button text="Contact" class="justify-center mt-5 md:justify-start md:w-fit "/>
    </div>
  </div>
</template>

<style scoped></style>
