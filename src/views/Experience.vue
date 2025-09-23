<script setup>
import { ref, onMounted, watch } from 'vue'
import Button from '@/components/Button.vue'
import ExperienceDetail from '@/components/ExperienceDetail.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const dataExperience = ref([])

const fetchExperience = async () => {
  const res = await fetch('data/experience.json')
  const rawData = await res.json()
  const keyLang = `experience_${locale.value}`
  const data = rawData[keyLang]

  // console.log(data)
  const work = data.workExperience
  const orga = data.organizationExperience.map((item) => ({
   ...item,
    company: item.organization,
  }))

  dataExperience.value = [...work,...orga]
}

watch(locale, () => {
  fetchExperience()
})

onMounted( () => {
  fetchExperience()
})

</script>

<template>
  <div class="md:px-18">
    <div class="my-30 container mx-auto px-5 min-h-screen">
      <div>
        <h1 class="font-bold text-4xl text-sky-800" data-aos="fade-right">{{ t('experience') }}</h1>
        <p class="mt-5 font-semibold" data-aos="fade-right">
          {{ t('description') }}
        </p>
      </div>

      <div class="mt-5 flex flex-col gap-5" data-aos="fade-up">
        <ExperienceDetail v-for="(item, index) in dataExperience" :key="index" v-bind="item" />
      </div>

      <!-- contact -->
      <div class="my-5 border p-5 border-gray-400 flex flex-col">
        <h1 class="font-semibold text-xl pb-3">{{ t('additional') }}</h1>
        <p>
          {{ t('additional_description') }}
        </p>
        <Button :text="t('button.contact')" class="justify-center mt-5 md:justify-start md:w-fit" page="contact"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
