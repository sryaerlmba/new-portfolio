<script setup>
import Badge from '@/components/Badge.vue'
import { ref, onMounted, watchEffect } from 'vue'
import Button from '@/components/Button.vue'
import EducationDetail from '@/components/EducationDetail.vue'

const certificates = ref([])
const courses = ref([])

onMounted(async () => {
  const response = await fetch('data/certificate.json')
  const data = await response.json()
  certificates.value = data
  courses.value = data.courses
  console.log(certificates.value)
})
</script>

<template>
  <div class="md:px-18">
    <div class="my-30 mx-auto container min-h-screen px-5">
      <h1 class="text-sky-800 text-4xl font-bold">Education, Certification and Course</h1>
      <p class="font-medium text-gray-600 mt-5">
        My academic journey and professional development through various educational programs,
        certifications, and courses that have shaped my skills and knowledge.
      </p>

      <!-- Formal Education -->
      <div class="">
        <h1 class="text-sky-800 text-4xl font-semibold mt-5">Formal Education</h1>
        <hr class="h-px my-4 bg-sky-800 border-0" />

        <div class="sm:p-0">
          <div class="border p-5 border-gray-400 rounded-1xl shadow-lg" data-aos="fade-left">
            <div class="flex sm:gap-20 flex-col sm:flex-row">
              <div class="flex flex-col gap-2 my-2 sm:my-0">
                <div class="flex gap-2">
                  <i class="text-2xl ri-graduation-cap-fill text-sky-800"></i>
                  <p class="font-semibold text-2xl">Undergraduate</p>
                </div>
                <div class="flex gap-2">
                  <i class="ri-calendar-line text-sky-800 text-1xl"></i>
                  <p class="font-semibold text-1xl">09/2022 - present</p>
                </div>
              </div>
              <div>
                <h1 class="font-semibold text-2xl">System and Information Technology</h1>
                <p class="font-semibold text-sky-800 mt-1">
                  Universitas Siber Indonesia, South Jakarta, Indonesia
                </p>
                <Badge text="GPA: 3.84/4.00" class="mt-3" />
                <div class="px-5">
                  <ul
                    class="mt-3 text-gray-600 list-disc list-outside space-y-2 leading-relaxed text-sm md:text-base"
                  >
                    <li>
                      Recipient of the BRI Institute Cemerlang Scholarship (Minimum GPA: 3.00)
                    </li>
                    <li>
                      Banking Courses: Accounting, Microfinance, Business Mathematics, Basic Banking
                    </li>
                    <li>
                      Information Systems and Technology Courses: Programming Algorithms,
                      Information Systems Analysis, Information and Communication Technology,
                      Discrete Mathematics, Cyber Security, Statistics (Python), Object Oriented
                      Programming (Java), Databases (SQL), Digital Marketing, English, Privacy and
                      Data Protection, Organization and Computer Architecture, Web Programming
                      (PHP), Financial Technology, Research Methodology, Management Information
                      System, Risk Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="text-sky-800 text-4xl font-semibold mt-5">Certification</h1>
        <hr class="h-px my-4 bg-sky-800 border-0" />

        <EducationDetail :data="certificates.professional" type="professional" />
        <EducationDetail :data="certificates.technical" type="technical" />
        <EducationDetail :data="certificates.bootcamp" type="bootcamp" />
        <EducationDetail :data="courses.udemy" type="udemy" />
        <EducationDetail :data="courses.dicoding" type="dicoding" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
