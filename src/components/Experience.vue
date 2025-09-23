<script setup>
import { reactive, ref, onMounted, watch, computed } from 'vue'
import ButtonHover from './ButtonHover.vue'
import Button from './Button.vue'
import { useI18n } from 'vue-i18n'

// i18n
const { t, locale, messages } = useI18n()

// state
const currentTab = ref('work_experience')

const experience = reactive({
  workExperience: [],
  organizationExperience: [],
})

// button akan ddijalani lagi ketika locale berubah
const button = computed(() => ({
  work_experience: messages.value[locale.value].button.experience.work_experience,
  organization_experience: messages.value[locale.value].button.experience.organization_experience
}))

// Fetch data
const fetchExperience = async () => {
  const res = await fetch('data/experience.json')
  const rawData = await res.json()

  const langKey  = `experience_${locale.value}`
  const data = rawData[langKey]

  experience.workExperience = data.workExperience.slice(0, 3)
  experience.organizationExperience = data.organizationExperience.slice(0, 2)

}

// Watch locale change
watch(locale, () => {
  fetchExperience()
})

// onMounted
onMounted(() => {
  fetchExperience()
})

</script>

<template>
  <section class="my-15 container mx-auto">
      <h1
        class="text-start text-2xl font-bold text-sky-800 uppercase px-5 sm:p-0"
        data-aos="fade-left"
      >
        {{ t('experience') }}
      </h1>
      <hr class="my-5 text-sky-800 max-w-[90vw] mx-auto" />

      <div class="flex justify-center space-x-2 sm:justify-start px-5 sm:p-0" data-aos="fade-up">
        <ButtonHover
          v-for="(button, index) in button"
          :key="index"
          :text="button"
          :class="{ 'bg-sky-800 text-white': currentTab === index }"
          @click="currentTab = index"
          class="transisition-all duration-300 ease-in-out"
        />
      </div>

      <div class="grid-cols-1 grid my-5 gap-2 px-5 sm:p-0" v-if="currentTab === 'work_experience'">
        <div
          class="rounded shadow-lg p-5"
          v-for="(item, index) in experience.workExperience"
          :key="index"
          data-aos="fade-up"
        >
          <h1 class="text-xl text-black font-semibold">{{ item.title }} | {{ item.type }}</h1>
          <p class="text-lg text-sky-800">{{ item.company }}</p>
          <p class="text-gray-600">{{ item.period }}</p>
          <ul class="list-disc my-2 text-gray-700 list-inside">
            <li v-for="(list, index) in item.details" :key="index">{{ list }}</li>
          </ul>
        </div>
      </div>

      <div class="grid-cols-1 grid my-5 gap-2 px-5 sm:p-0" v-else>
        <div
          class="rounded shadow-lg p-5"
          v-for="(item, index) in experience.organizationExperience"
          :key="index"
          data-aos="fade-up"
        >
          <h1 class="text-xl text-black font-semibold">{{ item.title }} | {{ item.type }}</h1>
          <p class="text-lg text-sky-800">{{ item.organization }}</p>
          <p class="text-gray-600">{{ item.period }}</p>
          <ul class="list-disc my-2 text-gray-700 list-inside">
            <li v-for="(item, index) in item.details" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex justify-center" data-aos="fade-up">
        <Button :text="t('button.experience.all_experience')" page="experience" />
      </div>
  </section>
</template>
