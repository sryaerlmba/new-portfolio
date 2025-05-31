<script setup>
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="sm:p-0">
    <div class="border p-5 border-gray-400 rounded-1xl shadow-lg mt-5" data-aos="fade-left">
      <div class="flex gap-2 flex-col md:flex-row">
        <!-- Kiri -->
        <div class="md:w-1/4">
          <h1 class="font-semibold text-lg capitalize">{{ type }}</h1>
          <div v-if="data?.period || data?.date" class="flex items-center gap-1">
            <i class="ri-calendar-line text-sky-800"></i>
            <p class="text-gray-600">{{ data.period || data.date }}</p>
          </div>
        </div>

        <!-- Kanan -->
        <div class="md:w-3/4">
          <!-- PROFESSIONAL -->
          <div v-if="type === 'professional'">
            <h2 class="font-semibold">{{ data?.field }}</h2>
            <p class="italic text-gray-600">{{ data?.institution }}</p>
            <p class="mt-2">{{ data?.description }}</p>
          </div>

          <!-- TECHNICAL -->
          <div v-else-if="type === 'technical'">
            <h2 class="font-semibold">{{ data?.certificate }}</h2>
            <p class="italic text-gray-600">{{ data?.issuer }}</p>
            <p class="mt-2">{{ data?.details }}</p>
          </div>

          <!-- COURSE: udemy  -->
          <div v-else-if="type === 'udemy'">
            <h2 class="font-semibold">{{ data?.title }}</h2>
            <p class="italic text-gray-600">{{ data?.platform || 'Dicoding Academy' }}</p>
            <p class="mt-2">Includes modules: {{ data?.modules.join(', ') }}.</p>
          </div>

          <!-- COURSE: dicoding -->
          <div v-else-if="type === 'dicoding'">
            <div v-for="(item, index) in data" :key="index" class="mb-5">
              <h2 class="font-semibold">{{ item.title }}</h2>
              <p class="italic text-gray-600">{{ item.platform || 'Dicoding Academy' }}</p>
              <p class="mt-2">Includes modules: {{ item.modules.join(', ') }}.</p>
            </div>
          </div>

          <!-- BOOTCAMP -->
          <div v-else-if="type === 'bootcamp'">
            <h2 class="font-semibold">{{ data?.program }}</h2>
            <p class="italic text-gray-600">{{ data?.organizer }}</p>
            <p class="mt-2">Includes modules: {{ data?.modules.join(', ') }}.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
