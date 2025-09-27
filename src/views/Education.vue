<script setup>
import Badge from '@/components/Badge.vue'
import EducationDetail from '@/components/EducationDetail.vue'
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const certificates = ref({})
const courses = ref({})

const fetchCertificate = async () => {
  const response = await fetch('data/certificate.json')
  const rawdata = await response.json()
  const keyLang = `certificate_${locale.value}`

  certificates.value = rawdata[keyLang]
  courses.value = rawdata[keyLang].courses
}

onMounted(fetchCertificate)

watch(locale, fetchCertificate)
</script>

<template>
  <div class="md:px-18">
    <div class="my-30 mx-auto container min-h-screen px-5">
      <h1 class="text-sky-800 text-4xl font-bold" data-aos="fade-left">
        {{ t('educationPage.title') }}
      </h1>
      <p class="font-medium text-gray-600 mt-5" data-aos="fade-left">
        {{ t('educationPage.subtitle') }}
      </p>

      <!-- Formal Education -->
      <h1 class="text-sky-800 text-4xl font-semibold mt-5" data-aos="fade-left">
        {{ t('educationPage.formalEducation') }}
      </h1>
      <hr class="h-px my-4 bg-sky-800 border-0" />

      <div class="border p-5 border-gray-400 rounded-1xl shadow-lg" data-aos="fade-left">
        <div class="flex sm:gap-20 flex-col sm:flex-row">
          <div class="flex flex-col gap-2 my-2 sm:my-0">
            <div class="flex gap-2">
              <i class="text-2xl ri-graduation-cap-fill text-sky-800"></i>
              <p class="font-semibold text-2xl">{{ t('educationPage.undergraduate') }}</p>
            </div>
            <div class="flex gap-2">
              <i class="ri-calendar-line text-sky-800 text-1xl"></i>
              <p class="font-semibold text-1xl">{{ t('educationPage.undergraduatePeriod') }}</p>
            </div>
          </div>
          <div>
            <h1 class="font-semibold text-2xl">{{ t('educationPage.major') }}</h1>
            <p class="font-semibold text-sky-800 mt-1">{{ t('educationPage.university') }}</p>
            <Badge :text="t('educationPage.gpa')" class="mt-3" />
            <div class="px-5">
              <ul
                class="mt-3 text-gray-600 list-disc list-outside space-y-2 leading-relaxed text-sm md:text-base"
              >
                <li>{{ t('educationPage.achievements.scholarship') }}</li>
                <li>{{ t('educationPage.achievements.bankingCourses') }}</li>
                <li>{{ t('educationPage.achievements.techCourses') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 class="text-sky-800 text-4xl font-semibold mt-5" data-aos="fade-left">
        {{ t('educationPage.certification') }}
      </h1>
      <hr class="h-px my-4 bg-sky-800 border-0" />

      <pre>
        {{ certificates.value }}
      </pre>

      <EducationDetail :data="certificates.professional" type="professional" />
      <EducationDetail :data="certificates.technical" type="technical" />
      <EducationDetail :data="certificates.bootcamp" type="bootcamp" />
      <EducationDetail :data="courses.udemy" type="udemy" />
      <EducationDetail :data="courses.dicoding" type="dicoding" />
    </div>
  </div>
</template>
