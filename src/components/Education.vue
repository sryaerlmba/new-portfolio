<script setup lang="ts">
import Badge from './Badge.vue'
import ButtonHover from './ButtonHover.vue'

const badges = {
  education: {
    label: 'GPA: 3.84/4.00',
  },
  certifications: [
    {
      year: '2025',
      title: 'Vue.js Course - Udemy',
    },
    {
      year: '2025',
      title: 'SQL (Intermediate) Certificate - HackerRank',
    },
    {
      year: '2023-2025',
      title: 'Multimedia Services - Badan Nasional Sertifikasi Profesi',
    },
  ],
  awards: {
    label: 'Second Runner Up',
  },
}

const button = {
  education: 'View Education Details',
  certifications: 'View All Certifications',
}
</script>

<template>
  <section class="my-10 mx-auto container min-h-screen">
    <h1
      class="text-start text-2xl font-bold text-sky-800 uppercase pl-5 sm:p-0"
      data-aos="fade-left"
    >
      Education
    </h1>
    <hr class="my-5 text-sky-800 max-w-[90vw] mx-auto" />
    <div class="px-5 sm:p-0">
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
              Cyber University, South Jakarta, Indonesia
            </p>
            <Badge :text="badges.education.label" class="mt-3" />
            <p class="mt-3 text-gray-600">
              Recipient of the BRI Institute Cemerlang Scholarship (Minimum GPA: 3.00)
            </p>
          </div>
        </div>
        <div class="mt-10 sm:w-60">
          <ButtonHover :text="button.education" page="education" />
        </div>
      </div>
    </div>

    <!-- Key Course  -->
    <div class="px-5 sm:p-0 h-full md:mt-5 my-5">
      <div id="awards" class="border p-5 border-gray-400 flex h-full flex-col shadow-lg">
        <div class="flex items-center gap-2">
          <i class="ri-book-line text-2xl"></i>
          <p class="text-2xl font-semibold">Key Courses</p>
        </div>
        <div class="mt-3">
          <h1 class="font-semibold text-gray-800">IT Courses:</h1>
          <p class="text-gray-600">
            Programming Algorithms, Information Systems Analysis, Information and Communication
            Technology, Discrete Mathematics, Cyber Security, Statistics (Python), Object Oriented
            Programming (Java), Databases (SQL), Digital Marketing, English, Privacy and Data
            Protection, Organization and Computer Architecture, Web Programming (PHP), Financial
            Technology, Research Methodology, Management Information System, Risk Management.
          </p>
          <h1 class="font-semibold text-gray-800 mt-3">Banking Course:</h1>
          <p class="text-gray-600">
            Accounting, Microfinance, Business Mathematics, Basic Banking.
          </p>
        </div>
      </div>
    </div>

    <div
      class="grid md:grid-cols-2 mt-1 sm:mt-5 gap-5 sm:gap-5 sm:grid-cols-1 place-items-center\"
      data-aos="fade-up"
    >
      <div class="px-5 sm:p-0 h-full">
        <div
          class="border p-5 border-gray-400 rounded-1xl flex h-full flex-col justify-between shadow-lg"
        >
          <div>
            <div class="flex gap-2 mb-5 items-center">
              <i class="ri-award-line text-2xl"></i>
              <p class="text-black font-semibold text-2xl">Certifications & Courses</p>
            </div>
            <div
              class="flex gap-3 items-center mb-3"
              v-for="(item, index) in badges.certifications"
            >
              <Badge :text="item.year" class="whitespace-nowrap" />
              <p class="text-gray-600">{{ item.title }}</p>
            </div>
          </div>
          <div class="mt-5">
            <ButtonHover :text="button.certifications" page="education"/>
          </div>
        </div>
      </div>

      <!-- awards -->
      <div class="px-5 sm:p-0 h-full">
        <div id="awards" class="border p-5 border-gray-400 flex h-full flex-col shadow-lg">
          <div class="flex items-center gap-2">
            <i class="ri-trophy-line text-2xl"></i>
            <p class="text-2xl font-semibold">Awards</p>
          </div>
          <div class="mt-3">
            <h1 class="font-semibold text-gray-800">SB IEEE UNM</h1>
            <Badge :text="badges.awards.label" class="mt-3" />
            <p class="mt-3">
              Creating an Abstact with the theme "Driving Digital Transformation Technology and
              Artificial Intelligence for the future".
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
